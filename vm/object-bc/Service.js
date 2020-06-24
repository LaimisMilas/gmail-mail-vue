package lt.gmail.mail.sender.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import lt.gmail.mail.sender.exception.RecordNotFoundException;
import lt.gmail.mail.sender.model.${objectName}Entity;
import lt.gmail.mail.sender.repository.${objectName}Repository;


@Service
public class ${objectName}Service {

    @Autowired
        ${objectName}Repository repository;

    public List<${objectName}Entity> getAll()
    {
        List<${objectName}Entity> list = repository.findAll();

        if(list.size() > 0) {
            return list;
        } else {
            return new ArrayList<${objectName}Entity>();
        }
    }

    public ${objectName}Entity getById(Long id) throws RecordNotFoundException
{
    Optional<${objectName}Entity> entity = repository.findById(id);

    if(entity.isPresent()) {
    return entity.get();
} else {
    throw new RecordNotFoundException("No Message record exist for given id");
}
}

public ${objectName}Entity createOrUpdate(${objectName}Entity entity) throws RecordNotFoundException
{
    Optional<${objectName}Entity> item = repository.findById(entity.getId());
    if(item.isPresent())
    {
        ${objectName}Entity newEntity = item.get();
#foreach( $field in $fields )
        newEntity.set${field.fieldUC}(entity.get${field.fieldUC}());
#end
        newEntity = repository.save(newEntity);
        return newEntity;
    } else {
        entity = repository.save(entity);
        return entity;
    }
}

public void deleteById(Long id) throws RecordNotFoundException
{
    Optional<${objectName}Entity> entity = repository.findById(id);

    if(entity.isPresent())
    {
        repository.deleteById(id);
    } else {
        throw new RecordNotFoundException("No Message record exist for given id");
    }
}
}
