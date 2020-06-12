package pl.chemik.tournamentmanagerapi.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.chemik.tournamentmanagerapi.dao.entity.User;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
}
