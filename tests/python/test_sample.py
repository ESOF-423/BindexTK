# sample test for pytest initial setup

def plus_1(x):
	return x + 1

def test_wrong():
	assert plus_1(4) == 5

def test_correct():
	assert plus_1(3) == 4