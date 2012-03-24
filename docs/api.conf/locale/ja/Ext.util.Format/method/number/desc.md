Formats the passed number according to the passed format string.

The number of digits after the decimal separator character specifies the number of
decimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.

The <i>presence</i> of a thousand separator character in the format string specifies that
the <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.

By default, "," is expected as the thousand separator, and "." is expected as the decimal separator.

Locale-specific characters are always used in the formatted output when inserting
thousand and decimal separators.

The format string must specify separator characters according to US/UK conventions ("," as the
thousand separator, and "." as the decimal separator)

To allow specification of format strings according to local conventions for separator characters, add
the string <code>/i</code> to the end of the format string.

examples (123456.789):

* 0 - (123456) show only digits, no precision<br>
* 0.00 - (123456.78) show only digits, 2 precision<br>
* 0.0000 - (123456.7890) show only digits, 4 precision<br>
* 0,000 - (123,456) show comma and digits, no precision<br>
* 0,000.00 - (123,456.78) show comma and digits, 2 precision<br>
* 0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>

To allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.

For example: 0.000,00/i

