#include <stdio.h>

int main() {
	
	int a, b, c, max;
	a = 9;
	b = 40;
	c = 5;
	if (a>b) {
		max = a;
	} else {
		max = b;
	}
	if (max<c) {
		max = c;
	}
	printf ("max = %d", max); 
	return 0;
}
