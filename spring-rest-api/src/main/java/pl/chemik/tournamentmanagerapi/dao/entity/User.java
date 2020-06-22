package pl.chemik.tournamentmanagerapi.dao.entity;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="users", schema = "public")
public class User {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private Boolean isAccountActivated;
//    @OneToMany//(
//            mappedBy = "organizer"
//            cascade = CascadeType.DETACH,
//            orphanRemoval = true
//    )
//    private Set<Tournament> organizedTournaments;
//    @ManyToMany
//    @JoinTable(
//            name = "user_tournament"
////            joinColumns = @JoinColumn(name = "user_id"),
////            inverseJoinColumns = @JoinColumn(name = "tournament_id")
//    )
//    private Set<Tournament> participatedTournaments;

    public User(Long id, String name, String surname, String email, String password, Boolean isAccountActivated) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.isAccountActivated = isAccountActivated;
    }

    public User(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAccountActivated() {
        return isAccountActivated;
    }

    public void setAccountActivated(Boolean accountActivated) {
        isAccountActivated = accountActivated;
    }

//    public Set<Tournament> getOrganizedTournaments() {
//        return organizedTournaments;
//    }
//
//    public void setOrganizedTournaments(Set<Tournament> organizedTournaments) {
//        this.organizedTournaments = organizedTournaments;
//    }
//
//
//    public Set<Tournament> getParticipatedTournaments() {
//        return participatedTournaments;
//    }
//
//    public void setParticipatedTournaments(Set<Tournament> participatedTournaments) {
//        this.participatedTournaments = participatedTournaments;
//    }


}
