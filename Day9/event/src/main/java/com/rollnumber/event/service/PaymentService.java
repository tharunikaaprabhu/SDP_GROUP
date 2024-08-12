package com.rollnumber.event.service;

import java.util.List;

import com.rollnumber.event.model.Payment;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




import com.rollnumber.event.Repo.PaymentRepo;
@Service
public class PaymentService {



    @Autowired
    private PaymentRepo prepo;

    public List<Payment> getPayment() {
        return prepo.findAll();
    }

    public Payment addPayment(Payment payment) {
        return prepo.save(payment);
    }

    public String deletePayment(Long pid) {
        prepo.deleteById(pid);
        return "User Deleted " + pid;
    }

   
}

