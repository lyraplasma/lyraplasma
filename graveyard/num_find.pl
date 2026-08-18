#!/usr/bin/perl
use strict;
use warnings;

my $int_total = 0;

while (my $buf_line = <STDIN>) {
    chomp($buf_line);
    if ($buf_line =~ m/(\d+)/) {
	$int_total = $int_total + $1;
	print "\t\tFound $1, total is now $int_total\n";
    }
}
print "\t\tSum: $int_total\n";
