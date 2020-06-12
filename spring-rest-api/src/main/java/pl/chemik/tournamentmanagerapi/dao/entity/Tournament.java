package pl.chemik.tournamentmanagerapi.dao.entity;

import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="tournamnets", schema = "public")
public class Tournament {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String name;
    private String discipline;
    private LocalDate time;
    private String googleMap;
    private Integer maxParticipants;
    private LocalDate lastDayOfApplications;
    private Integer seededPlayers;

    public Tournament(Long id, String name, String discipline, LocalDate time,
                      String googleMap, Integer maxParticipants, LocalDate lastDayOfApplications,
                      Integer seededPlayers) {
        this.id = id;
        this.name = name;
        this.discipline = discipline;
        this.time = time;
        this.googleMap = googleMap;
        this.maxParticipants = maxParticipants;
        this.lastDayOfApplications = lastDayOfApplications;
        this.seededPlayers = seededPlayers;
    }

    public Tournament() {
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

    public String getDiscipline() {
        return discipline;
    }

    public void setDiscipline(String discipline) {
        this.discipline = discipline;
    }

    public LocalDate getTime() {
        return time;
    }

    public void setTime(LocalDate time) {
        this.time = time;
    }

    public String getGoogleMap() {
        return googleMap;
    }

    public void setGoogleMap(String googleMap) {
        this.googleMap = googleMap;
    }

    public Integer getMaxParticipants() {
        return maxParticipants;
    }

    public void setMaxParticipants(Integer maxParticipants) {
        this.maxParticipants = maxParticipants;
    }

    public LocalDate getLastDayOfApplications() {
        return lastDayOfApplications;
    }

    public void setLastDayOfApplications(LocalDate lastDayOfApplications) {
        this.lastDayOfApplications = lastDayOfApplications;
    }

    public Integer getSeededPlayers() {
        return seededPlayers;
    }

    public void setSeededPlayers(Integer seededPlayers) {
        this.seededPlayers = seededPlayers;
    }
}
