package lt.gmail.mail.sender.web;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import lt.gmail.mail.sender.exception.RecordNotFoundException;
import lt.gmail.mail.sender.model.${objectName}Entity;
import lt.gmail.mail.sender.service.${objectName}Service;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ${objectName}Controller {

    @Autowired
    ${objectName}Service service;

    @RequestMapping(method = RequestMethod.GET, value = "${path}s")
    public ResponseEntity<List<${objectName}Entity>> getAll() {
        List<${objectName}Entity> list = service.getAll();

        return new ResponseEntity<List<${objectName}Entity>>(list, new HttpHeaders(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "${path}s/{id}")
    public ResponseEntity<${objectName}Entity> getById(@PathVariable("id") Long id) throws RecordNotFoundException {
    ${objectName}Entity entity = service.getById(id);

    return new ResponseEntity<${objectName}Entity>(entity, new HttpHeaders(), HttpStatus.OK);
}

@RequestMapping(method = RequestMethod.POST, value = "${path}s", consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<${objectName}Entity> create(@RequestBody ${objectName}Entity enity) throws RecordNotFoundException {
    ${objectName}Entity updated = service.createOrUpdate(enity);
    return new ResponseEntity<${objectName}Entity>(updated, new HttpHeaders(), HttpStatus.OK);
}

@RequestMapping(method = RequestMethod.PUT, value = "${path}s", consumes = MediaType.APPLICATION_JSON_VALUE)
public void update(@RequestBody ${objectName}Entity enity) throws RecordNotFoundException {
    service.createOrUpdate(enity);
}

@DeleteMapping("${path}s/{id}")
public HttpStatus deleteById(@PathVariable("id") Long id) throws RecordNotFoundException {
    service.deleteById(id);
    return HttpStatus.FORBIDDEN;
}

}
