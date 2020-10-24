package com.tradeify.tradeify_ws.shared;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService {
	
	@Autowired
    private JavaMailSender mailSender;
	
	public void sendMail(String toMail, String fullName, String keyreg) {
		
		MimeMessage mimeMessage = mailSender.createMimeMessage();
	    MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

	    try {
	        messageHelper.setTo(toMail);
	        messageHelper.setText("Sayın " + fullName +
	        		",\n\nTradeify Üyeliğinizi Tamamlamak İçin Lütfen Aşağıdaki Linke Tıklayın:\n\n"
	        		+ "http://localhost:3000/reg/" + keyreg);
	        messageHelper.setSubject("Üyeliğinizi Tamamlayın");
	    } catch (MessagingException e) {
	        e.printStackTrace();
	    }
	    mailSender.send(mimeMessage);
	}
}
