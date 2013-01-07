'Saifur(QA Tester)



	SystemUtil.CloseProcessByName"Excel.Exe"
		Set ObjExcel=CreateObject("Excel.Application")
		Set ObjBook=ObjExcel.Workbooks.Open("C:\Documents and Settings\Administrator\Desktop\QTP\AllTest\MCDDFFN\MortgageCalOrg_DDF1.xls")
		Set ObjSheet=ObjBook.Worksheets("ExcelMCOrg")
		ObjExcel.Visible=True
		
		'msgbox ObjSheet.Cells(2,2)
		
		RwCount=ObjSheet.UsedRange.Rows.Count
		'msgbox RwCount
		ColCount=ObjSheet.UsedRange.Columns.Count
		'msgBox ColCount
Function fnForMc(vParamName)

			
			For i= 1 to ColCount
					If  ObjSheet.Cells(1,i).Value=vParamName Then
					Cellid=i
					Exit For
					End If
			Next
			
			For j=2 to RwCount
					If  ObjSheet.Cells(j,1).Value=Environment.Value("TestName")Then
						fnForMc=ObjSheet.Cells(j,Cellid).Value
						Exit For
					End If
		
			Next

End Function

'SystemUtil.CloseProcessByName"Excel.Exe"
SystemUtil.CloseProcessByName"iexplore.exe"
SystemUtil.Run"iexplore.exe","www.mortgagecalculator.org"



	
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[homevalue]").Set fnForMc("Home_value")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebList("param[credit]").Select fnForMc("Credir_profile")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[principal]").Set fnForMc("Loan_amount")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebList("param[rp]").Select fnForMc("Loan_purpose")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[interest_rate]").Set fnForMc("Interest_rate")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[term]").Set fnForMc("Loan_term")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebList("param[start_month]").Select fnForMc("Start_month")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebList("param[start_year]").Select fnForMc("Start_year")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[property_tax]").Set fnForMc("Property_tax")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebEdit("param[pmi]").Set fnForMc("PMI")
	Browser("Mortgage Calculator").Page("Mortgage Calculator").WebButton("Calculate").Click































