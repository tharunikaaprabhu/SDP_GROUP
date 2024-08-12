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


import com.rollnumber.event.model.Payment;

import com.rollnumber.event.service.PaymentService;

    

    @RestController
    @RequestMapping("/payment")
public class PaymentController {
    

    
    
        @Autowired
        private PaymentService pservice;
    
        @GetMapping("/getpayment")
        public List<Payment> GetPayment() {
            return pservice.getPayment();
        }
    
        @PostMapping("/regpayment")
        public Payment AddPayment(@RequestBody Payment payment) {
            return pservice.addPayment(payment);
        }
    
        @DeleteMapping("/delete/{pid}")
        public String DeletePayement(@PathVariable Long pid) {
            return pservice.deletePayment(pid);
        }
    
    }
    





