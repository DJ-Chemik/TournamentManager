package pl.chemik.tournamentmanagerapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.manager.TournamentManager;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TournamentManagerApi {

    private TournamentManager tournamentManager;

    @Autowired
    public TournamentManagerApi(TournamentManager tournamentManager) {
        this.tournamentManager = tournamentManager;
    }

    @GetMapping("/tournaments")
    public Iterable<Tournament> getAll(){
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


    @GetMapping
    public String getTestText(){
        return "Witaj w Managerze Turniejów!";
    }
}
