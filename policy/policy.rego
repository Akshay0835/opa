package main


deny[msg] {
    input.public == false
    msg = "Public access is not allowed"
}


deny[msg] {
    input.env == "dev"
    msg = "Deployment from dev environment is not allowed"
}