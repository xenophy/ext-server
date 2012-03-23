Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').

Note: The date string returned by the javascript Date object's toString() method varies
between browsers (e.g. FF vs IE) and system region settings (e.g. IE in Asia vs IE in America).
For a given date string e.g. "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)",
getTimezone() first tries to et the timezone abbreviation from between a pair of parentheses
(which may or may not be present), failing which it proceeds to get the timezone abbreviation
from the GMT offset portion of the date string.
