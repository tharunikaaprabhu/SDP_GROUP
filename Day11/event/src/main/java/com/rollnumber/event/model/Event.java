package com.rollnumber.event.model;


 
// import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "event")

public class Event {
 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Or use another strategy if needed
    private Long eid;

    private String name;
    private String email;
    private String eventtitle;
    private String eventdate;
    private String eventlocation;
    private String phone;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    public Long getEid() {
        return eid;
    }
    public void setEid(Long eid) {
        this.eid = eid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getEventtitle() {
        return eventtitle;
    }
    public void setEventtitle(String eventtitle) {
        this.eventtitle = eventtitle;
    }
    public String getEventdate() {
        return eventdate;
    }
    public void setEventdate(String eventdate) {
        this.eventdate = eventdate;
    }
    public String getEventlocation() {
        return eventlocation;
    }
    public void setEventlocation(String eventlocation) {
        this.eventlocation = eventlocation;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }


   

    

}