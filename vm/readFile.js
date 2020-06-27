fs = require('fs');
Velocity = require('velocityjs');

const projectHome = "/home/laimonas/git/gmail-mail-vue";

function readFile(fileName, callBack) {
    fs.readFile(fileName, 'utf8', callBack);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}

function renderTemp(tmp, file, content) {
    readFile(tmp, function (err, data) {
        if (err) {
            return console.log(err);
        }
        var result = Velocity.render(data, content).trim();
        writeToFile(file, result);
    });
}


function createFE() {

    const objectConfig = {
        objectName: 'RelationLink',
        lowerCase: 'relationLink',
        path: '/relation/link',
        fields: ['id', 'emailId', 'phoneId', 'personaId', 'companyId']
    };

    renderTemp("vm/object-crud/Add.vue", "result/Add.vue", objectConfig);
    renderTemp("vm/object-crud/Delete.vue", "result/Delete.vue", objectConfig);
    renderTemp("vm/object-crud/Edit.vue", "result/Edit.vue", objectConfig);
    renderTemp("vm/object-crud/List.vue", "result/List.vue", objectConfig);
    renderTemp("vm/object-crud/View.vue", "result/View.vue", objectConfig);
    renderTemp("vm/object-crud/modelNav.vue", "result/modelNav.vue", objectConfig);
    renderTemp("vm/object-crud/objectStore.vue", "result/relationLink.js", objectConfig);

}

function createBE() {

    const objectConfig = {
        objectName: 'RelationLink',
        lowerCase: 'RelationLink',
        path: '/relation/link',
        fields: [
            {field: 'id', fieldUC: 'Id', type: "Long"},
            {field: 'emailId', fieldUC: 'EmailId', type: "Long"},
            {field: 'phoneId', fieldUC: 'PhoneId', type: "Long"},
            {field: 'personaId', fieldUC: 'PersonaId', type: "Long"},
            {field: 'companyId', fieldUC: 'CompanyId', type: "Long"}
        ]
    };

    const bePath = "/home/laimonas/git/gmail-mail-sb/src/main/java/lt/gmail/mail/sender";
    renderTemp("vm/object-bc/Entity.js", bePath + "/model/" + objectConfig.objectName + "Entity.java", objectConfig);
    renderTemp("vm/object-bc/Controller.js", bePath + "/web/" + objectConfig.objectName + "Controller.java", objectConfig);
    renderTemp("vm/object-bc/Repository.js", bePath + "/repository/" + objectConfig.objectName + "Repository.java", objectConfig);
    renderTemp("vm/object-bc/Service.js", bePath + "/service/" + objectConfig.objectName + "Service.java", objectConfig);
}

createFE();
//createBE();

