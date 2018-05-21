if "%~1" equ "" (
	set message="Initial development"
) ELSE (
	set message=%1
)

git add .
git commit -m %message%
git push https://patrickcberry:Asunmaa1@github.com/patrickcberry/ng-ui-bootstrap.git
