package pl.chemik.tournamentmanagerapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.manager.TournamentManager;

@RestController
@RequestMapping("/api")
public class TournamentManagerApi {

    private TournamentManager tournamentManager;

    @Autowired
    public TournamentManagerApi(TournamentManager tournamentManager) {
        this.tournamentManager = tournamentManager;
    }

    @GetMapping("/all")
    public Iterable<Tournament> getAll(){
        return tournamentManager.findAll();
    }

    @PostMapping("/add")
    public Tournament addTournament(@RequestBody Tournament tournament){
        return tournamentManager.save(tournament);
    }


    @GetMapping
    public String getTestText(){
        return "Witaj w Managerze Turniejów!";
    }
}
