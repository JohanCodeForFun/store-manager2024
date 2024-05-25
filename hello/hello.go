package main

import (
	"fmt"
	"log"

	"store/greetings"
)

func main() {
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	// names := []string{"Adam", "Eve"}

	// Request a greeting message
	// messages, err := greetings.Hellos(names)
	message, err := greetings.Hello("Johan")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(message)
}
