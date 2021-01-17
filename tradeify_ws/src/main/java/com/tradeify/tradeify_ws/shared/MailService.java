package com.tradeify.tradeify_ws.shared;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.user.Users;

@Service
public class MailService {
	
	@Autowired
    private JavaMailSender mailSender;
	
	public void sendVerificationMail(Users user, String keyreg) {
		
		MimeMessage mimeMessage = mailSender.createMimeMessage();
	    MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

	    try {
	        messageHelper.setTo(user.getEmail());
	        messageHelper.setText("Sayın " + user.getName() + " " + user.getSurname() +
	        		",\n\nTradeify Üyeliğinizi Tamamlamak İçin Lütfen Aşağıdaki Linke Tıklayın:\n\n"
	        		+ "http://localhost:8090/#/reg/" + keyreg);
	        messageHelper.setSubject("Üyeliğinizi Tamamlayın");
	    } catch (MessagingException e) {
	        e.printStackTrace();
	    }
	    mailSender.send(mimeMessage);
	}
	
public void sendPasswordResetMail(Users user, String password) {
		
		MimeMessage mimeMessage = mailSender.createMimeMessage();
	    MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage);

	    try {
	        messageHelper.setTo(user.getEmail());
	        messageHelper.setText("Sayın " + user.getName() + " " + user.getSurname() +
	        		",\n\nŞifreniz başarılı bir şekilde sıfırlanmıştır. Yeni şifrenizle giriş yapabilirsiniz:\n\n"
	        		+ "Yeni Şifre: " + password);
	        messageHelper.setSubject("Şifre Sıfırlama");
	    } catch (MessagingException e) {
	        e.printStackTrace();
	    }
	    mailSender.send(mimeMessage);
	}
}
