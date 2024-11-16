import { IHelloWorld } from "../Model/IHelloWorld";

export const HelloWorldData: IHelloWorld[] = [
    {
        language: 'java',
        logoLink: 'https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png',
        code: `
        public class Main {
            public static void main(String[] args) {
                System.out.println("Hello World");
            }
        }`
      },
      {
        language: 'python',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png',
        code: `print("Hello World")`
      },
      {
        language: 'javascript',
        logoLink: 'https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png',
        code: `console.log("Hello World");`
      },
      {
        language: 'c',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png',
        code: `
        #include <stdio.h>
        int main() {
            printf("Hello World\\n");
            return 0;
        }`
      },
      {
        language: 'c++',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png',
        code: `
        #include <iostream>
        using namespace std;
        int main() {
            cout << "Hello World" << endl;
            return 0;
        }`
      },
      {
        language: 'c#',
        logoLink: 'https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png',
        code: `
        using System;
        class Program {
            static void Main(string[] args) {
                Console.WriteLine("Hello World");
            }
        }`
      },
      {
        language: 'go',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png',
        code: `
        package main
        import "fmt"
        func main() {
            fmt.Println("Hello World")
        }`
      },
      {
        language: 'ruby',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192603745-7d34df9e-7756-4756-a539-6a61badf7a80.png',
        code: `puts "Hello World"`
      },
      {
        language: 'php',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png',
        code: `
        <?php echo "Hello World";`
      },
      {
        language: 'swift',
        logoLink: 'https://user-images.githubusercontent.com/25181517/121406389-6267a300-c95e-11eb-8d67-f1e22afe8aea.png',
        code: `print("Hello World")`
      },
      {
        language: 'kotlin',
        logoLink: 'https://user-images.githubusercontent.com/25181517/185062810-7ee0c3d2-17f2-4a98-9d8a-a9576947692b.png',
        code: `
        fun main() {
            println("Hello World")
        }`
      },
      {
        language: 'typescript',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png',
        code: `console.log("Hello World");`
      },
      {
        language: 'rust',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192599922-3a8ceb1c-ff1d-40bc-b73c-99ea1182d8ad.png',
        code: `
        fn main() {
            println!("Hello World");
        }`
      },
      {
        language: 'dart',
        logoLink: 'https://user-images.githubusercontent.com/25181517/186150304-1568ffdf-4c62-4bdc-9cf1-8d8efcea7c5b.png',
        code: `
        void main() {
            print("Hello World");
        }`
      },
      {
        language: 'scala',
        logoLink: 'https://user-images.githubusercontent.com/25181517/185062806-7be3b0f6-3373-44a8-be19-21ddd2307a70.png',
        code: `
        object Main extends App {
            println("Hello World")
        }`
      },
      {
        language: 'perl',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423522-7151cbfb-2c79-4650-a2c7-211e14d4bf54.png',
        code: `print "Hello World\\n";`
      },
      {
        language: 'bash',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png',
        code: `echo "Hello World"`
      },
      {
        language: 'r',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423503-2f6b0c74-0cc0-47a3-b73c-90c2488b0b33.png',
        code: `print("Hello World")`
      },
      {
        language: 'haskell',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423514-7f1b5d3c-9a22-4b4f-b8d7-92adceac0ad9.png',
        code: `main = putStrLn "Hello World"`
      },
      {
        language: 'elixir',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192158304-db78a94b-ceb3-4b03-a352-b25760e5e63c.png',
        code: `IO.puts("Hello World")`
      },
      {
        language: 'erlang',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192158301-566962f5-62fd-461b-a4f0-ce1f1030bd98.png',
        code: `
        -module(hello).
        -export([world/0]).
        world() ->
            io:format("Hello World~n").`
      },
      {
        language: 'lua',
        logoLink: 'https://github.com/Ramonmelod/profile-technology-icons/assets/139141993/89970707-fd3d-46e9-897e-7e51ba07ba4c',
        code: `print("Hello World")`
      },
      {
        language: 'groovy',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183892787-bca94a0e-ffcb-4eeb-8137-e0fc4e446c25.png',
        code: `println "Hello World"`
      },
      {
        language: 'sql',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423528-c06e61a0-3273-4b4d-a092-39272f51d7c7.png',
        code: `SELECT 'Hello World';`
      },
      {
        language: 'powershell',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423513-94b80ca0-f5d3-4fa3-8bbd-21adbd38eff2.png',
        code: `Write-Output "Hello World"`
      },
      {
        language: 'clojure',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423511-9c06e18d-543d-4993-86f6-ec068221dc99.png',
        code: `(println "Hello World")`
      },
      {
        language: 'f#',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423526-871d2a57-3f48-4871-8eec-011d06f76b94.png',
        code: `printfn "Hello World"`
      },
      {
        language: 'objective-c',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423504-38e34d19-76b8-4db1-8c24-872be8c9d2b7.png',
        code: `
        #import <Foundation/Foundation.h>
        int main(int argc, const char * argv[]) {
            @autoreleasepool {
                NSLog(@"Hello World");
            }
            return 0;
        }`
      },
      {
        language: 'assembly',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423527-c738ebea-8f94-4856-b6bd-12f8e85c7ff2.png',
        code: `
        section .data
            hello db "Hello World", 0
    
        section .text
            global _start
        _start:
            mov rax, 1
            mov rdi, 1
            mov rsi, hello
            mov rdx, 12
            syscall
            mov rax, 60
            xor rdi, rdi
            syscall`
      },
      {
        language: 'fortran',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192106356-07c248b7-9c7c-40bd-a202-f7caf5d0b1bc.png',
        code: `
        program HelloWorld
            print *, "Hello World"
        end program HelloWorld`
      },
      {
        language: 'matlab',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192106593-610ee31c-995e-4f24-b8e1-0f18eead6fae.png',
        code: `disp('Hello World')`
      },
      {
        language: 'vb.net',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423531-19f77397-b2ef-40f0-8f29-061a9532db9b.png',
        code: `
        Module HelloWorld
            Sub Main()
                Console.WriteLine("Hello World")
            End Sub
        End Module`
      },
      {
        language: 'shell (zsh)',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423502-09f89563-5a1c-4248-b54f-d037b920eb29.png',
        code: `echo "Hello World"`
      },
      {
        language: 'prolog',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423529-6270b4a0-5130-42c0-b073-3c885d8f7488.png',
        code: `
        :- initialization(main).
        main :- write('Hello World'), nl.`
      },
      {
        language: 'nim',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423514-7f1b5d3c-9a22-4b4f-b8d7-92adceac0ad9.png',
        code: `echo "Hello World"`
      },
      {
        language: 'ada',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423505-9c6b1170-8e6c-4aaf-a8b1-280580dcb6b7.png',
        code: `
        with Ada.Text_IO;
        procedure Hello_World is
        begin
            Ada.Text_IO.Put_Line("Hello World");
        end Hello_World;`
      },
      {
        language: 'tcl',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423518-d5a437a6-c173-4ba4-bd4f-b87603b94eab.png',
        code: `puts "Hello World"`
      },
      {
        language: 'cobol',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423521-162931b8-8e28-472c-bf8c-31dd463ed40b.png',
        code: `
        IDENTIFICATION DIVISION.
        PROGRAM-ID. HelloWorld.
        PROCEDURE DIVISION.
            DISPLAY "Hello World".
            STOP RUN.`
      },
      {
        language: 'smalltalk',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423522-7151cbfb-2c79-4650-a2c7-211e14d4bf54.png',
        code: `Transcript show: 'Hello World'; cr.`
      },
      {
        language: 'postscript',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423506-69c5a130-7d36-4564-8b70-74a3cb6a5c6c.png',
        code: `
        /HelloWorld (Hello World) def
        HelloWorld show`
      },
      {
        language: 'abap',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a869.png',
        code: `
        REPORT zhelloworld.
        WRITE 'Hello World'.`
      },
      {
        language: 'julia',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423510-69cc4b96-fb98-47a6-abb1-71a160ac6e42.png',
        code: `println("Hello World")`
      },
      {
        language: 'd',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423530-3e6274da-ec40-41ba-a39f-a785d7c52e6e.png',
        code: `
        import std.stdio;
        void main() {
            writeln("Hello World");
        }`
      },
      {
        language: 'crystal',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423512-680de749-02f2-4b8e-9473-890d7b9f2a32.png',
        code: `puts "Hello World"`
      },
      {
        language: 'racket',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423520-a30a53fa-0a5c-481d-9c1d-62e3e7c6c3f4.png',
        code: `
        #lang racket
        (displayln "Hello World")`
      },
      {
        language: 'ocaml',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423524-5782076f-40b4-4714-9373-12c6a0c2ef9a.png',
        code: `print_endline "Hello World"`
      },
      {
        language: 'vbscript',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423531-19f77397-b2ef-40f0-8f29-061a9532db9b.png',
        code: `MsgBox "Hello World"`
      },
      {
        language: 'brainfuck',
        logoLink: 'https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a869.png',
        code: `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`
      }
]