package pl.chemik.tournamentmanagerapi.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.chemik.tournamentmanagerapi.dao.TournamentRepo;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class TournamentManager {

    private TournamentRepo tournamentRepo;

    @Autowired
    public TournamentManager(TournamentRepo tournamentRepo) {
        this.tournamentRepo = tournamentRepo;
    }

    public Optional<Tournament> findById(Long id){
        return tournamentRepo.findById(id);
    }

    public Iterable<Tournament> findAll(){
        return tournamentRepo.findAll();
    }

    public Tournament save(Tournament tournament){
        return tournamentRepo.save(tournament);
    }

    public void deleteById(Long id){
        tournamentRepo.deleteById(id);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDataBase(){
        save(new Tournament(
                1L, "Pierwszy Turniej", "LOL",
                LocalDate.of(2020, 07, 07), "Konin",
                100, LocalDate.of(2020, 07, 06), 50
        ));
        save(new Tournament(
                2L, "Drugi Turniej", "Mafia 2",
                LocalDate.of(2020, 10, 07), "Poznań",
                30, LocalDate.of(2020, 10, 01), 15
        ));
    }
}
