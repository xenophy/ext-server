Compare 2 specified versions, starting from left to right. If a part contains special version strings,
they are handled in the following order:
'dev' < 'alpha' = 'a' < 'beta' = 'b' < 'RC' = 'rc' < '#' < 'pl' = 'p' < 'anything else'
