package pl.chemik.tournamentmanagerapi.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.chemik.tournamentmanagerapi.dao.TournamentRepo;
import pl.chemik.tournamentmanagerapi.dao.UserRepo;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.dao.entity.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserManager {

    private UserRepo userRepo;
    private TournamentRepo tournamentRepo;

    @Autowired
    public UserManager(UserRepo userRepo, TournamentRepo tournamentRepo) {
        this.userRepo = userRepo;
        this.tournamentRepo = tournamentRepo;
    }

    public Optional<User> findById(Long id){
        return userRepo.findById(id);
    }

    public Iterable<User> findAll(){
        return userRepo.findAll();
    }

    public User save(User user){
        return userRepo.save(user);
    }

    public void deleteById(Long id){
        userRepo.deleteById(id);
    }

    // TO OPTIMIZE IN FUTURE
    public List<Tournament> getTournamentsWhereUserParticipates(Long userId){
        Iterable<Tournament> tournaments = tournamentRepo.findAll();
        List<Tournament> tournamentsWhereUserParticipates = new ArrayList<>();
        for (Tournament tournament: tournaments) {
            List<User> participants = tournament.getParticipants();
            for (User participant:participants) {
                if (participant.getId()==userId){
                    tournamentsWhereUserParticipates.add(tournament);
                }
            }
        }
        return tournamentsWhereUserParticipates;
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void fillDataBase(){
//        User user1 = new User(
//                1L, "Szymon", "Szczepański", "szymonsz@wp.pl", "secret", false
//        );
//        user1.setOrganizedTournaments(new ArrayList<>());
//        save(user1);
//    }
}
