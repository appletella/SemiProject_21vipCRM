/**
 * 
 */
/* # fullcalendar api */
$(document).ready(function() {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: 'prevYear,prev,next,nextYear today',
			center: 'title',
			right: 'dayGridMonth,dayGridWeek,dayGridDay'
		},
		initialDate: '2023-12-06',
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		dayMaxEvents: true, // allow "more" link when too many events
		events: '/calendar/event/user',
		selectable: true,
		selectMirror: true,
		eventStartEditable: true,
		eventDurationEditable: true,
		select: function(arg) {
			$("#start").val(moment(arg.start).format('YYYY-MM-DD'));
			$("#end").val(moment(arg.end).format('YYYY-MM-DD'));
			$("#myModal").modal('show');
			calendar.unselect()
		},
		eventClick: function(arg) {
			console.log(arg.event.id);
			$.ajax({
				type: "GET",
				url: "/calendar/event/" + arg.event.id,
				success: function(data) {
					console.log(data);
					let str = "";
					str += "<ul>";
					str += "<li>제목 : " + data.title + "</li>";
					str += "<li>번호 : <span id='dataId'>" + data.id + "</span></li>";
					str += "<li>일시 : " + data.start + " ~ " + data.end + "</li>";
					str += "<li>내용 : " + "</li>";
					str += "<li>" + data.eventContent + "</li>";
					str += "</ul>"
					if (data.file != null) {
						str += "<img src='" + data.file.fileRoot + "' >";
					}

					$("#modal-body").html(str);
				},
				error: function(error) {
					console.error('Error:', error);
				}
			})
			$("#myModal2").modal('show');
		}
	});
	calendar.render();
});


function submitForm() {
	$("#modalForm").submit();
}



function changeModal() {
	let number = $("#dataId").text();
	console.log(number);
	$("#modal-title").html("일정 수정");
	$.get('/calendar/event/' + number, function(data) {
		let str = "";
		str += "<form id='modalForm2'>"
		str += "<ul>";
		str += "<li>제목 : <input type='text' name='title' value='" + data.title + "'/></li>";
		str += "<li>번호 : <input type='text' name='id' value='" + data.id + "' readonly/></li>";
		str += "<li>일시 : <input type='date' name='start' value='" + data.start + "' pattern='\d{4}-\d{2}-\d{2}'/> ~ <input type='date' name='end' value='" + data.end + "' pattern='\d{4}-\d{2}-\d{2}'/> </li>";
		str += "<li>내용 : </li>";
		str += "<li style='display: none;'><input type='text' value='" + data.eventType + "' name='eventType'/></li>";
		str += "<li><textarea cols='55' rows='5' name='eventContent'>" + data.eventContent + "</textarea></li>";
		str += "</ul>"
		str += "</form>"
		if (data.file != null) {
			str += "<img src='" + data.file.fileRoot + "' >";
		}
		$("#modal-body").html(str);

		// form 외부의 버튼 클릭 시 form 제출
		$('#changeButton').removeAttr("onclick");
		$('#changeButton').attr("style", "display:none;");
		$('#chaegeButtonB').removeAttr("style");
		
	});

}

function modalSubmit(){
	var form ={};
	$("#modalForm2").serializeArray().forEach(function(item) {
			form[item.name] = item.value;
	});
	console.log(form);
	
	$.ajax({
		url: "/calendar/event",
		type: "PUT",
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify(form),
		success: function() {
			console.log("수정 성공");
			$("#myModal2").modal('hide');
			$('#calendar').fullCalendar('refetchEvents');  
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});

}


function deleteCal(){
	let number = $("#dataId").text();
	console.log(number);
	$.ajax({
		url: "/calendar/event/" + number,
		type: "DELETE",
		success: function() {
			console.log("삭제 성공");
			$("#myModal2").modal('hide');
			$("#calendar").refetchEvents();
		},
		error: function(error) {
			console.error('Error:', error);
		}
	});
}


