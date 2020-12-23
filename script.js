let month = prompt('Enter a month').toLowerCase();

if (
	month == 'january' ||
	month == 'march' ||
	month == 'may' ||
	month == 'july' ||
	month == 'august' ||
	month == 'october' ||
	month == 'december'
) {
	alert(`${month} has 31 days`);
} else if (
	month == 'april' ||
	month == 'june' ||
	month == 'may' ||
	month == 'september' ||
	month == 'november'
) {
	alert(`${month} has 30 days`);
} else if (month == 'february') {
	alert(`${month} has 28 days`);
} else {
	alert('Enter a valid month!!!');
}

switch (true) {
	case month == 'january' ||
		month == 'march' ||
		month == 'may' ||
		month == 'july' ||
		month == 'august' ||
		month == 'october' ||
		month == 'december':
		alert(`${month} has 31 days`);
		break;
	case month == 'april' ||
		month == 'june' ||
		month == 'may' ||
		month == 'september' ||
		month == 'november':
		alert(`${month} has 30 days`);
		break;
	case month == 'february':
		alert(`${month} has 28 days`);
		break;
	default:
		alert('Enter a valid month!!!');
		break;
}
