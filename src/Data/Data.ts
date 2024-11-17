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
        logoLink: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/perl.svg',
        code: `print "Hello World\\n";`
      },
      {
        language: 'bash',
        logoLink: 'https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png',
        code: `echo "Hello World"`
      },
      {
        language: 'r',
        logoLink: 'https://user-images.githubusercontent.com/33158051/103333492-1d992100-4a3c-11eb-8cd4-e83cb2c44895.png',
        code: `print("Hello World")`
      },
      {
        language: 'haskell',
        logoLink: 'logo/haskell.svg',
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
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        code: `SELECT 'Hello World';`
      },
      {
        language: 'powershell',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/PowerShell_Core_6.0_icon.png/121px-PowerShell_Core_6.0_icon.png',
        code: `Write-Output "Hello World"`
      },
      {
        language: 'clojure',
        logoLink: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/clojure.svg',
        code: `(println "Hello World")`
      },
      {
        language: 'f#',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/F_Sharp_logo.svg/128px-F_Sharp_logo.svg.png',
        code: `printfn "Hello World"`
      },
      {
        language: 'objective-c',
        logoLink: 'logo/objectivec.svg',
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
        logoLink: 'https://raw.githubusercontent.com/github/explore/e495457f5ff28c343f9e422f8e3cf80fd3e80890/topics/assembly/assembly.png',
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
        logoLink: 'https://upload.wikimedia.org/wikipedia/mr/thumb/c/c5/VB.NET_LOGO.png/800px-VB.NET_LOGO.png?20130302053855',
        code: `
        Module HelloWorld
            Sub Main()
                Console.WriteLine("Hello World")
            End Sub
        End Module`
      },
      {
        language: 'shell (zsh)',
        logoLink: 'https://camo.githubusercontent.com/059a74a6f1b3dad47ca8852c5c22a53da40bbc0b4fdd163c4bec84487578dba1/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f7a73682e737667',
        code: `echo "Hello World"`
      },
      {
        language: 'prolog',
        logoLink: 'logo/prolog.svg',
        code: `
        :- initialization(main).
        main :- write('Hello World'), nl.`
      },
      {
        language: 'nim',
        logoLink: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/nim-lang.svg',
        code: `echo "Hello World"`
      },
      {
        language: 'ada',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ada_Mascot_slogan-Wikibooks.svg/557px-Ada_Mascot_slogan-Wikibooks.svg.png?20230428222128',
        code: `
        with Ada.Text_IO;
        procedure Hello_World is
        begin
            Ada.Text_IO.Put_Line("Hello World");
        end Hello_World;`
      },
      {
        language: 'tcl',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Tcl-powered.svg/70px-Tcl-powered.svg.png',
        code: `puts "Hello World"`
      },
      {
        language: 'cobol',
        logoLink: 'logo/cobol.svg',
        code: `
        IDENTIFICATION DIVISION.
        PROGRAM-ID. HelloWorld.
        PROCEDURE DIVISION.
            DISPLAY "Hello World".
            STOP RUN.`
      },
      {
        language: 'smalltalk',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Smalltalk_Balloon.svg/150px-Smalltalk_Balloon.svg.png',
        code: `Transcript show: 'Hello World'; cr.`
      },
      {
        language: 'postscript',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Adobe_PostScript_3_logo.svg/121px-Adobe_PostScript_3_logo.svg.png',
        code: `
        /HelloWorld (Hello World) def
        HelloWorld show`
      },
      {
        language: 'abap',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/125px-SAP_2011_logo.svg.png',
        code: `
        REPORT zhelloworld.
        WRITE 'Hello World'.`
      },
      {
        language: 'julia',
        logoLink: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/julia.svg',
        code: `println("Hello World")`
      },
      {
        language: 'd',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/D_Programming_Language_logo.svg/124px-D_Programming_Language_logo.svg.png',
        code: `
        import std.stdio;
        void main() {
            writeln("Hello World");
        }`
      },
      {
        language: 'crystal',
        logoLink: 'https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/crystal.svg',
        code: `puts "Hello World"`
      },
      {
        language: 'racket',
        logoLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/121px-Racket-logo.svg.png',
        code: `
        #lang racket
        (displayln "Hello World")`
      },
      {
        language: 'ocaml',
        logoLink: 'https://avatars.githubusercontent.com/u/1841483?s=200&v=4',
        code: `print_endline "Hello World"`
      },
      {
        language: 'vbscript',
        logoLink: 'https://upload.wikimedia.org/wikipedia/en/d/d8/VBSccript_file_format_icon.png',
        code: `MsgBox "Hello World"`
      },
      {
        language: 'brainfuck',
        logoLink: 'https://camo.githubusercontent.com/6b9d96e2d3257f4f28847e2879fd1a1edaf26a79215f84329f6ea84612a1ebab/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f63616761746179632f696d6167652f75706c6f61642f635f7363616c652c775f3530302f76313439333931343334342f62662e706e67',
        code: `++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.`
      }
]
