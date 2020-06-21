package pl.chemik.tournamentmanagerapi.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import pl.chemik.tournamentmanagerapi.dao.TournamentRepo;
import pl.chemik.tournamentmanagerapi.dao.UserRepo;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.dao.entity.User;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TournamentManager {

    private TournamentRepo tournamentRepo;
    private UserRepo userRepo;

    @Autowired
    public TournamentManager(TournamentRepo tournamentRepo, UserRepo userRepo) {
        this.tournamentRepo = tournamentRepo;
        this.userRepo = userRepo;
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

//    @EventListener(ApplicationReadyEvent.class)
//    public void fillDataBase(){
//        Tournament tournament1 = new Tournament(
//                1L, "Pierwszy Turniej", "LOL",
//                LocalDate.of(2020, 07, 07), "Konin",
//                100, LocalDate.of(2020, 07, 06), 50
//        );
//        Tournament tournament2 = new Tournament(
//                2L, "Drugi Turniej", "Mafia 2",
//                LocalDate.of(2020, 10, 07), "Poznań",
//                30, LocalDate.of(2020, 10, 01), 15
//        );
////        User user1 = userRepo.findById(1L).get();
////        List<Tournament> tournaments = new ArrayList<>(user1.getOrganizedTournaments());
////        tournaments.add(tournament1);
////        user1.setOrganizedTournaments(tournaments);
////        tournament1.setOrganizer(user1);
//        save(tournament1);
//        save(tournament2);
//    }
}
