package lt.gmail.mail.sender.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "${lowerCase}")
public class ${objectName}Entity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
#foreach( $field in $fields )
    private ${field.type} ${field.field};
#end
#foreach( $field in $fields )
    public ${field.type} get${field.fieldUC}(){
        return ${field.field};
    }

    public void set${field.fieldUC}(${field.type} ${field.field}){
        this.${field.field} = ${field.field};
    }
#end
