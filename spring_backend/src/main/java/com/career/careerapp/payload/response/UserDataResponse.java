package com.career.careerapp.payload.response;

public class UserDataResponse {
        private Long id;
        private String sector;
        private String operatingSystem;
        private String algorithm;
        private String userid;

    public UserDataResponse(Long id, String sector, String operatingSystem, String algorithm, String userid) {
        this.id = id;
        this.sector = sector;
        this.operatingSystem = operatingSystem;
        this.algorithm = algorithm;
        this.userid = userid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getOperatingSystem() {
        return operatingSystem;
    }

    public void setOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    public String getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(String algorithm) {
        this.algorithm = algorithm;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }
}
