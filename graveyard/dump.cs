using System;

class Program {
    static void Main(string[] args) {
	Console.WriteLine("Hello from dump.cs!!");

	if (args.Length > 0) {
	    Console.WriteLine($"You passed: {string.Join(", ", args)}");
	} else {
	    Console.WriteLine("No args passed. Try this one!!\n mono dump.exe sweet sugar");
	}

	int x = 30;
	string arr_str = "arr string";
	bool is_saved = true;
	double pi = 3.1415;

	if (true && !false) { Console.WriteLine("true"); }
	Console.WriteLine("Counting to 5");
	for(int i = 1; i <= 5; i++) { Console.Write(i + " "); }
	Console.WriteLine();
    }
}
