# Build the CV
cv.pdf: cv.tex settings.sty profile.tex employment.tex skills.tex publications.tex education.tex misc.tex referee.tex
	pdflatex -interaction=nonstopmode cv.tex
	pdflatex -interaction=nonstopmode cv.tex

clean:
	rm -f *.aux *.log *.out *.LTX* cv.pdf

.PHONY: clean
