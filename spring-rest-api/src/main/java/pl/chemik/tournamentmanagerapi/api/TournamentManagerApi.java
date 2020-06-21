package pl.chemik.tournamentmanagerapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.dao.entity.User;
import pl.chemik.tournamentmanagerapi.manager.TournamentManager;
import pl.chemik.tournamentmanagerapi.manager.UserManager;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TournamentManagerApi {

    private TournamentManager tournamentManager;
    private UserManager userManager;

    @Autowired
    public TournamentManagerApi(TournamentManager tournamentManager, UserManager userManager) {
        this.tournamentManager = tournamentManager;
        this.userManager = userManager;
    }

    @GetMapping("/tournaments")
    public Iterable<Tournament> getAllTournaments(){
        return tournamentManager.findAll();
    }

    @GetMapping("/tournament")
    public Optional<Tournament> getOneTournamentById(@RequestParam Long id) {
        return tournamentManager.findById(id);
    }

    @PostMapping("/tournaments/add")
    public Tournament addTournament(@RequestBody Tournament tournament){
        return tournamentManager.save(tournament);
    }

    @PutMapping("/tournaments/update")
    public Tournament updateTournament(@RequestBody Tournament tournament){
        return tournamentManager.save(tournament);
    }

    @DeleteMapping("/tournaments/delete")
    public void deleteTournaments(@RequestParam Long id){
        tournamentManager.deleteById(id);
    }

    @GetMapping("/users")
    public Iterable<User> getAllUsers(){
        return userManager.findAll();
    }

    @GetMapping("/user")
    public Optional<User> getOneUserById(@RequestParam Long id){
        return userManager.findById(id);
    }

    @PostMapping("/users/add")
    public User addUser(@RequestBody User user){
        return userManager.save(user);
    }

    @PutMapping("/users/update")
    public User updateUser(@RequestBody User user){
        return userManager.save(user);
    }

    @DeleteMapping("/users/delete")
    public void deleteUser(@RequestParam Long id){
        userManager.deleteById(id);
    }

    @GetMapping
    public String getTestText(){
        return "Witaj w Managerze Turniejów!";
    }

    @GetMapping("/initializedatabase")
    public boolean addUserByGet(){
        User user1 = new User(
                1L, "Szymon", "Szczepański", "szymonsz@wp.pl", "secret", true
        );
//        user1.setOrganizedTournaments(new ArrayList<>());


        Tournament tournament1 = new Tournament(
                1L, "Pierwszy Turniej", "LOL",
                LocalDate.of(2020, 07, 07), "Konin",
                100, LocalDate.of(2020, 07, 06), 50
        );
        Tournament tournament2 = new Tournament(
                2L, "Drugi Turniej", "Mafia 2",
                LocalDate.of(2020, 10, 07), "Poznań",
                30, LocalDate.of(2020, 10, 01), 15
        );
//        User user1 = userRepo.findById(1L).get();
//        List<Tournament> tournaments = new ArrayList<>(user1.getOrganizedTournaments());
//        tournaments.add(tournament1);
//        user1.setOrganizedTournaments(tournaments);

        tournament1.setOrganizer(user1);
        userManager.save(user1);
        tournamentManager.save(tournament1);
        tournamentManager.save(tournament2);


        return true;
    }
}
