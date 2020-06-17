package pl.chemik.tournamentmanagerapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.dao.entity.User;
import pl.chemik.tournamentmanagerapi.manager.TournamentManager;
import pl.chemik.tournamentmanagerapi.manager.UserManager;

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

    @GetMapping
    public String getTestText(){
        return "Witaj w Managerze Turniejów!";
    }
}
