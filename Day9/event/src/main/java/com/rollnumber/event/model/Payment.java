package com.rollnumber.event.model;


    


 
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
 
    


 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Or use another strategy if needed
    private Long pid;

    private String pname;
    private String cardnum;
    private String expirdate;
    private String cvv;
    public Long getPid() {
        return pid;
    }
    public void setPid(Long pid) {
        this.pid = pid;
    }
    public String getPname() {
        return pname;
    }
    public void setPname(String pname) {
        this.pname = pname;
    }
    public String getCardnum() {
        return cardnum;
    }
    public void setCardnum(String cardnum) {
        this.cardnum = cardnum;
    }
    public String getExpirdate() {
        return expirdate;
    }
    public void setExpirdate(String expirdate) {
        this.expirdate = expirdate;
    }
    public String getCvv() {
        return cvv;
    }
    public void setCvv(String cvv) {
        this.cvv = cvv;
    }
    

    


}
