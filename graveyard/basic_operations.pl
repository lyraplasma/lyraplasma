# <-- yes a comment :))
my $name = "Lyra";
my $age = 0;
my $pie = 3.14159;
print $name;
print "\n";
print $age;
print "\n";
print $pie;
print "\n";

my @colors = ("red", "green", "blue", "orange");
foreach my $item (@colors) {
    print $item . "\n";
}
my $first_color = @colors[0];
print $first_color;
print "\n";
my %user = (
    name => "User A",
    age => 22,
    city => "Paris"
    );
my $users_city = $user{city};
print $users_city;
print "\n";
print "\n\n";

print "Hello " . $name . "!\n";

##*array stuff
my @letters = ("a", "b", "c", "d");
foreach my $char (@letters) {
    print "Letter: ". $char . "\n";
}
foreach(@letters){
    print $_."\n";
}
my @cats = ("ginger", "snowey", "water", "sweetey");
foreach my $cat (@cats){
    print "This is ".$cat."\n";
}
foreach(@cats){
    print "\t\tthis is ".$_."!!!\n";
}
my @shopping_cart = ("avon thingey lipstick");
foreach(@shopping_cart){
 print "\n\t\t\t".$_."\n";   
}

my @numbers = (1, 2, 3, 4);
foreach(@numbers){
    print "\t".$_."\n";
}

############################## ifs
my $current_score = 77;
if ($current_score >= 90) {
    print "A";
} elsif ($current_score >= 80) {
    print "B";
} else {
    print "C";
}

for (my $i = 0; $i < 5; $i++) {
    print "\t\tNumber: $i\n";
}
##################################################
# regex stuff
print "\t######################################## regex here\n";
my $statement = "The quick brown fox";
if ($sentence =~ m/quick/) {
    print "That's a quick fox\n";
}
## ; semiconls are required!

$statement =~ s/brown/red/;
print $statement;
print "\n\n";
####################Number extraction#####################
my $text = "I have 42 apples";
if ($text =~ m/(\d+)/) {
    my $number = $1;
    print "Number is: $number\n";
}

sub greet {
    my($person, $time) = @_;
    return "Good $time, $person!\n";
}
print greet("User B", "Evening");
