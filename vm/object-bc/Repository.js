package lt.gmail.mail.sender.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import lt.gmail.mail.sender.model.${objectName}Entity;

@Repository
public interface ${objectName}Repository
extends JpaRepository<${objectName}Entity, Long> {
}
