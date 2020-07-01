package pl.chemik.tournamentmanagerapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.chemik.tournamentmanagerapi.dao.entity.Tournament;
import pl.chemik.tournamentmanagerapi.dao.entity.User;
import pl.chemik.tournamentmanagerapi.manager.TournamentManager;
import pl.chemik.tournamentmanagerapi.manager.UserManager;

import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
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
    public Iterable<Tournament> getAllTournaments() {
        return tournamentManager.findAll();
    }

    @GetMapping("/tournament/participants")
    public Iterable<User> getUsersFromTournaments(@RequestParam Long id) {
        return tournamentManager.findById(id).get().getParticipants();
    }

    @GetMapping("/tournament")
    public Optional<Tournament> getOneTournamentById(@RequestParam Long id) {
        return tournamentManager.findById(id);
    }



    @PostMapping("/tournaments/add")
    public Tournament addTournament(@RequestBody Tournament.TournamentInput tournament) {
        return tournamentManager.save(tournament);
    }

    @PutMapping("/tournaments/update")
    public Tournament updateTournament(@RequestBody Tournament.TournamentInputWithId tournament) {
        return tournamentManager.update(tournament);
    }

    @DeleteMapping("/tournaments/delete")
    public void deleteTournaments(@RequestParam Long id) {
        tournamentManager.deleteById(id);
    }

    @GetMapping("/users")
    public Iterable<User> getAllUsers() {
        return userManager.findAll();
    }

    @GetMapping("/user/participates")
    public Iterable<Tournament> getParticipatesTournamentForUser(@RequestParam Long id){
        return userManager.getTournamentsWhereUserParticipates(id);
    }

//    @GetMapping("/user/organized")
//    public Iterable<Tournament> getOrganizedTournamentForUser(@RequestParam Long id){
//        return userManager.findById(id).get().getOrganizedTournaments();
//    }

    @GetMapping("/user")
    public Optional<User> getOneUserById(@RequestParam Long id) {
        return userManager.findById(id);
    }

    @PostMapping("/users/add")
    public User addUser(@RequestBody User user) {
        return userManager.save(user);
    }

    @PutMapping("/users/update")
    public User updateUser(@RequestBody User user) {
        return userManager.save(user);
    }

    @DeleteMapping("/users/delete")
    public void deleteUser(@RequestParam Long id) {
        userManager.deleteById(id);
    }

    private static class LoginData {
        public String email;
        public String password;
    }

    @PostMapping("/users/login")
    public Long checkIsLoginDataAreCorrect(@RequestBody LoginData loginData) {
        Iterable<User> usersIt = userManager.findAll();
        for (User user : usersIt) {
            if (user.getEmail().equals(loginData.email)) {
                if (user.getPassword().equals(loginData.password)) {
                    return user.getId();
                } else {
                    return -1L;
                }
            }
        }

        return -1L;
    }

    @PostMapping("/signusertotournament")
    public boolean signUserToTournament(@RequestParam Long tournamentId, @RequestParam Long userId){
        return tournamentManager.signUserToTournament(tournamentId, userId);
    }

    @GetMapping
    public String getTestText() {
        return "Witaj w Managerze Turniejów!";
    }

    @GetMapping("/initializedatabase")
    public boolean initializeDatabase() {
        User user1 = new User(
                1L, "Szymon", "Szczepański", "szymonsz@wp.pl", "secret", true
        );
        User user2 = new User(
                2L, "Marek", "Marecki", "marek321@o2.pl", "marzenka", true
        );
        User user3 = new User(
                3L, "Adrian", "Bogucki", "adrian@gmail.com", "jammesjasz", true
        );
        User user4 = new User(
                4L, "Filip", "Kajzerka", "chlebek@wp.pl", "filipek22", true
        );
        User user5 = new User(
                5L, "Dominik", "Malina", "otto1434@onet.pl", "koniuszek", true
        );
        User user6 = new User(
                6L, "Zdzisława", "Zdomowiała", "ameryka-trump@chinese.ch", "magia", true
        );
        User user7 = new User(
                7L, "Zygmunt", "Wieża-Brodnicki", "wazazupydo@łupy.pl", "12345", true
        );
        User user8 = new User(
                8L, "Albert", "Chrypka", "zxcqwerty@gmail.com", "qwert4", true
        );
        User user9 = new User(
                9L, "Aleksiej", "Schodow", "putin@russian.ru", "uczony", true
        );

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
        Tournament tournament3 = new Tournament(
                3L, "Turniej 3 skoczni", "Skoki",
                LocalDate.of(2020, 12, 27), "Zakopane",
                15, LocalDate.of(2020, 11, 30), 12
        );

        tournament1.setOrganizer(user1);
        tournament2.setOrganizer(user2);
        tournament3.setOrganizer(user1);
//        Set<User> participants = new HashSet<>();
        List<User> participants = new ArrayList<>();
        participants.add(user1);
        participants.add(user2);
        participants.add(user3);
        participants.add(user4);
        participants.add(user5);
        participants.add(user6);
        participants.add(user7);
        participants.add(user8);
//        participants.add(user9);

        tournament1.setParticipants(participants);

//        Set<User> participants2 = new HashSet<>();
        List<User> participants2 = new ArrayList<>();
        participants2.add(user1);
        participants2.add(user2);
        tournament2.setParticipants(participants2);
        userManager.save(user1);
        userManager.save(user2);
        userManager.save(user3);
        userManager.save(user4);
        userManager.save(user5);
        userManager.save(user6);
        userManager.save(user7);
        userManager.save(user8);
        userManager.save(user9);
        tournamentManager.save(tournament1);
        tournamentManager.save(tournament2);
        tournamentManager.save(tournament3);

        return true;
    }
}
