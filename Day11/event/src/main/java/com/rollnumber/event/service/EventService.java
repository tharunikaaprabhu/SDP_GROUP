package com.rollnumber.event.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rollnumber.event.model.Event;

import com.rollnumber.event.Repo.EventRepo;

@Service
public class EventService {
    


    @Autowired
    private EventRepo erepo;

    public List<Event> getEvent() {
        return erepo.findAll();
    }

    public Event addEvent(Event event) {
        return erepo.save(event);
    }

    public String deleteEvent(Long eid) {
        erepo.deleteById(eid);
        return "User Deleted " + eid;
    }

   
}

