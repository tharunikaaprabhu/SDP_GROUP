package com.rollnumber.event.controller;

    

    import java.util.List;
    
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.DeleteMapping;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

import com.rollnumber.event.model.Event;

import com.rollnumber.event.service.EventService;

    

    @RestController
    @RequestMapping("/event")
public class EventController {
    
    
        @Autowired
        private EventService eservice;
    
        @GetMapping("/getevent")
        public List<Event> GetEvent() {
            return eservice.getEvent();
        }
    
        @PostMapping("/regevent")
        public Event AddEvent(@RequestBody Event event) {
            return eservice.addEvent(event);
        }
    
        @DeleteMapping("/delete/{eid}")
        public String DeleteEvent(@PathVariable Long eid) {
            return eservice.deleteEvent(eid);
        }
    
    }
    



