package com.web.controller;


import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.web.domain.Calendar;
import com.web.domain.Member;
import com.web.persistence.CalendarRepository;
import com.web.service.CalendarService;
import com.web.service.MainService;


@Controller
public class CalendarController {
	
	@Autowired
	CalendarService cs;
	
	@GetMapping("calendar")
	public String calendarPage() {
		return "calendar/calendar";
	}
	
	@PostMapping("inputCalendar")
	public String inputCalendar(Calendar cal) {
		cs.insertCalendar(cal);
		return "redirect:calendar";
	}
	
	@GetMapping("mypage")
    public String myPage(Model model, @ModelAttribute("user") Member member) {
//		Member findMember = MainService.getMember(member);
//        model.addAttribute("member",findMember);
        return "calendar/mypage";
    }
}
