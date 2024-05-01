package com.career.careerapp.models;

import com.career.careerapp.payload.request.UserDataRequest;
import jakarta.persistence.*;

import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "userdata")
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String operating;
    @NotBlank
    private String algorithm;
    @NotBlank
    private String programming;
    @NotBlank
    private String software;
    @NotBlank
    private String network;
    @NotBlank
    private String architecture;
    @NotBlank
    private String mathematics;
    @NotBlank
    private String coding;
    @NotBlank
    private String logical;
    @NotBlank
    private String communication;
    @NotBlank
    private String publicspeak;
    @NotBlank
    private String selflearning;
    @NotBlank
    private String teamwork;
    @NotBlank
    private String gentle;
    @NotBlank
    private String management;
    @NotBlank
    private String hardworker;
    @NotBlank
    private String introvert;
    @NotBlank
    private String subject;
    @NotBlank
    private String careerarea;
    @NotBlank
    private String workhour;
    @NotBlank
    private String salary;
    @NotBlank
    private String company;
    @NotBlank
    private String role;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public UserData() {
    }

    public UserData(Long id, String operating, String algorithm, String programming, String software, String network,
            String architecture, String mathematics, String coding, String logical, String communication,
            String publicspeak, String selflearning, String teamwork, String gentle, String management,
            String hardworker, String introvert, String subject, String careerarea, String workhour, String salary,
            String company, String role, User user) {
        this.id = id;
        this.operating = operating;
        this.algorithm = algorithm;
        this.programming = programming;
        this.software = software;
        this.network = network;
        this.architecture = architecture;
        this.mathematics = mathematics;
        this.coding = coding;
        this.logical = logical;
        this.communication = communication;
        this.publicspeak = publicspeak;
        this.selflearning = selflearning;
        this.teamwork = teamwork;
        this.gentle = gentle;
        this.management = management;
        this.hardworker = hardworker;
        this.introvert = introvert;
        this.subject = subject;
        this.careerarea = careerarea;
        this.workhour = workhour;
        this.salary = salary;
        this.company = company;
        this.role = role;
        this.user = user;
    }

    public UserData(String operating, String algorithm, String programming, String software, String network,
            String architecture, String mathematics, String coding, String logical, String communication,
            String publicspeak, String selflearning, String teamwork, String gentle, String management,
            String hardworker, String introvert, String subject, String careerarea, String workhour, String salary,
            String company, String role, User user) {
        this.operating = operating;
        this.algorithm = algorithm;
        this.programming = programming;
        this.software = software;
        this.network = network;
        this.architecture = architecture;
        this.mathematics = mathematics;
        this.coding = coding;
        this.logical = logical;
        this.communication = communication;
        this.publicspeak = publicspeak;
        this.selflearning = selflearning;
        this.teamwork = teamwork;
        this.gentle = gentle;
        this.management = management;
        this.hardworker = hardworker;
        this.introvert = introvert;
        this.subject = subject;
        this.careerarea = careerarea;
        this.workhour = workhour;
        this.salary = salary;
        this.company = company;
        this.role = role;
        this.user = user;
    }

    public UserData(UserDataRequest userDataRequest, User user) {

        this.operating = userDataRequest.getOperating();
        this.algorithm = userDataRequest.getAlgorithm();
        this.programming = userDataRequest.getProgramming();
        this.software = userDataRequest.getSoftware();
        this.network = userDataRequest.getNetwork();
        this.architecture = userDataRequest.getArchitecture();
        this.mathematics = userDataRequest.getMathematics();
        this.coding = userDataRequest.getCoding();
        this.logical = userDataRequest.getLogical();
        this.communication = userDataRequest.getCommunication();
        this.publicspeak = userDataRequest.getPublicspeak();
        this.selflearning = userDataRequest.getSelflearning();
        this.teamwork = userDataRequest.getTeamwork();
        this.gentle = userDataRequest.getGentle();
        this.management = userDataRequest.getManagement();
        this.hardworker = userDataRequest.getHardworker();
        this.introvert = userDataRequest.getIntrovert();
        this.subject = userDataRequest.getSubject();
        this.careerarea = userDataRequest.getCareerarea();
        this.workhour = userDataRequest.getWorkhour();
        this.salary = userDataRequest.getSalary();
        this.company = userDataRequest.getCompany();
        this.role = userDataRequest.getRole();
        this.user = user;
        System.out.println(this.role);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOperating() {
        return operating;
    }

    public void setOperating(String operating) {
        this.operating = operating;
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(String algorithm) {
        this.algorithm = algorithm;
    }

    public String getProgramming() {
        return programming;
    }

    public void setProgramming(String programming) {
        this.programming = programming;
    }

    public String getSoftware() {
        return software;
    }

    public void setSoftware(String software) {
        this.software = software;
    }

    public String getNetwork() {
        return network;
    }

    public void setNetwork(String network) {
        this.network = network;
    }

    public String getArchitecture() {
        return architecture;
    }

    public void setArchitecture(String architecture) {
        this.architecture = architecture;
    }

    public String getMathematics() {
        return mathematics;
    }

    public void setMathematics(String mathematics) {
        this.mathematics = mathematics;
    }

    public String getCoding() {
        return coding;
    }

    public void setCoding(String coding) {
        this.coding = coding;
    }

    public String getLogical() {
        return logical;
    }

    public void setLogical(String logical) {
        this.logical = logical;
    }

    public String getCommunication() {
        return communication;
    }

    public void setCommunication(String communication) {
        this.communication = communication;
    }

    public String getPublicspeak() {
        return publicspeak;
    }

    public void setPublicspeak(String publicspeak) {
        this.publicspeak = publicspeak;
    }

    public String getSelflearning() {
        return selflearning;
    }

    public void setSelflearning(String selflearning) {
        this.selflearning = selflearning;
    }

    public String getTeamwork() {
        return teamwork;
    }

    public void setTeamwork(String teamwork) {
        this.teamwork = teamwork;
    }

    public String getGentle() {
        return gentle;
    }

    public void setGentle(String gentle) {
        this.gentle = gentle;
    }

    public String getManagement() {
        return management;
    }

    public void setManagement(String management) {
        this.management = management;
    }

    public String getHardworker() {
        return hardworker;
    }

    public void setHardworker(String hardworker) {
        this.hardworker = hardworker;
    }

    public String getIntrovert() {
        return introvert;
    }

    public void setIntrovert(String introvert) {
        this.introvert = introvert;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCareerarea() {
        return careerarea;
    }

    public void setCareerarea(String careerarea) {
        this.careerarea = careerarea;
    }

    public String getWorkhour() {
        return workhour;
    }

    public void setWorkhour(String workhour) {
        this.workhour = workhour;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserData{" +
                "id=" + id +
                ", operating system='" + operating + '\'' +
                ", algorithm='" + algorithm + '\'' +
                ", userid='" + user.getId()
                + '\'' +
                '}';
    }
}
