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

    public Optional<Tournament> findById(Long id) {
        return tournamentRepo.findById(id);
    }

    public Iterable<Tournament> findAll() {
        return tournamentRepo.findAll();
    }

    public Tournament save(Tournament tournament) {
        return tournamentRepo.save(tournament);
    }

    public Tournament save(Tournament.TournamentInput ti) {
        Tournament tournament = new Tournament();
        tournament.setName(ti.name);
        tournament.setDiscipline(ti.discipline);
        tournament.setTime(ti.time);
        User organizer = userRepo.findById(ti.organizer).get();
        tournament.setOrganizer(organizer);
        tournament.setLastDayOfApplications(ti.lastDayOfApplications);
        tournament.setGoogleMap(ti.googleMap);
        tournament.setMaxParticipants(ti.maxParticipants);
        tournament.setSeededPlayers(ti.seededPlayers);
        return tournamentRepo.save(tournament);
    }

    public void deleteById(Long id) {
        tournamentRepo.deleteById(id);
    }

    public boolean signUserToTournament(Long tournamentId, Long userId) {

        List<User> participants = new ArrayList<>();
        participants.addAll(tournamentRepo.findById(tournamentId).get().getParticipants());
        // check is place in tournament
        if (participants.size() >= tournamentRepo.findById(tournamentId).get().getMaxParticipants()){
            return false;
        }
        // check is user not in this tournament
        User newParticipant = userRepo.findById(userId).get();
        for (User participant : participants) {
            if (newParticipant.getId() == participant.getId()) {
                return false;
            }
        }
        // add user
        participants.add(newParticipant);
        tournamentRepo.findById(tournamentId).get().setParticipants(participants);
        tournamentRepo.findById(tournamentId).get().setSeededPlayers(tournamentRepo.findById(tournamentId).get().getSeededPlayers()+1);
        Tournament tournament = tournamentRepo.findById(tournamentId).get();
        tournamentRepo.save(tournament);
        return true;
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
