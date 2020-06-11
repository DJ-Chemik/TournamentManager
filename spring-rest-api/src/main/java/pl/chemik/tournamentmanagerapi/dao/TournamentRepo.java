package pl.chemik.tournamentmanagerapi.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;

@Repository
public interface TournamentRepo extends CrudRepository<Tournament, Long> {
}
