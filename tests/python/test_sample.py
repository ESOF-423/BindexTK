# sample test for pytest initial setup

def plus_1(x):
	return x + 1

def test_one():
	assert plus_1(1) == 2

def test_two():
	assert plus_1(2) == 3