package com.rollnumber.event.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "feedback")

public class Feedback {
 
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Or use another strategy if needed
    private Long fid;

    private String fname;
    private String femail;
    private String fback;
    public Long getFid() {
        return fid;
    }
    public void setFid(Long fid) {
        this.fid = fid;
    }
    public String getFname() {
        return fname;
    }
    public void setFname(String fname) {
        this.fname = fname;
    }
    public String getFemail() {
        return femail;
    }
    public void setFemail(String femail) {
        this.femail = femail;
    }
    public String getFback() {
        return fback;
    }
    public void setFback(String fback) {
        this.fback = fback;
    }
    

    
}
