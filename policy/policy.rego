package main

deny[msg] if {
    input.public == false
    msg := "Public access is not allowed"
}

deny[msg] if {
    input.env == "dev"
    msg := "Deployment from dev environment is not allowed"
}