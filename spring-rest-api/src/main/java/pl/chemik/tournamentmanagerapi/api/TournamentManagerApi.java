package pl.chemik.tournamentmanagerapi.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TournamentManagerApi {

    @GetMapping
    public String getTestText(){
        return "ZADZIALO";
    }
}
