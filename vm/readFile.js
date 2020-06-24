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

function renderTemp(tmp, file, content){
    readFile(tmp, function (err,data) {
        if (err) {
            return console.log(err);
        }
        var result = Velocity.render(data, content).trim();
        writeToFile(file, result);
    });
}

const  objectConfig = {
    objectName: 'PhoneNumber',
    lowerCase: 'phoneNumber',
    path: '/phone/number',
    fields: [
            {field: 'id', fieldUC: 'Id', type: "Long"},
            {field: 'number',fieldUC: 'Number', type: "String"},
            {field: 'operator',fieldUC: 'Operator', type: "String"}
    ]
};

//renderTemp("vm/object-crud/Add.vue","result/Add.vue", objectConfig);
//renderTemp("vm/object-crud/Delete.vue","result/Delete.vue", objectConfig);
//renderTemp("vm/object-crud/Edit.vue","result/Edit.vue", objectConfig);
//renderTemp("vm/object-crud/List.vue","result/List.vue", objectConfig);
//renderTemp("vm/object-crud/View.vue","result/View.vue", objectConfig);
//renderTemp("vm/object-crud/modelNav.vue","result/modelNav.vue", objectConfig);
//renderTemp("vm/object-crud/objectStore.vue","result/store.js", objectConfig);

const bePath = "/home/laimonas/git/gmail-mail-sb/src/main/java/lt/gmail/mail/sender";

renderTemp("vm/object-bc/Entity.js",bePath + "/model/" + objectConfig.objectName + "Entity.java", objectConfig);
renderTemp("vm/object-bc/Controller.js",bePath + "/web/" + objectConfig.objectName + "Controller.java", objectConfig);
renderTemp("vm/object-bc/Repository.js",bePath + "/repository/" + objectConfig.objectName + "Repository.java", objectConfig);
renderTemp("vm/object-bc/Service.js",bePath + "/service/" + objectConfig.objectName + "Service.java", objectConfig);



