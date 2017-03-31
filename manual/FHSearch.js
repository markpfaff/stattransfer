//© Copyright Auric Visions Ltd, 2015. All Rights Reserved. http://www.Fast-Help.com
var include_num = 1;
var bold = 0;
var boFTS = 0;
var s = new Array();
s[0] = "Single User License Agreement and Limited Warranty for Stat/Transfer^SingleUserLicenseAgreementAndLimitedWarrantyForStatTransfer1.html^IMPORTANT – READ CAREFULLY BEFORE INSTALLING THE STAT/TRANSFER SOFTWARE. By clicking the “Next” butt...^Single User License Agreement and Limited Warranty for Stat/Transfer^`;";
s[1] = "What Stat/Transfer Does^WhatStatTransferDoes.html^Stat/Transfer is designed to simplify the transfer of statistical data between different programs....^What Stat/Transfer Does^`;";
s[2] = "Supported File Types^hs20.html^Version 13 of Stat/Transfer will support the file types given below:  1-2-3 Access ASCII - Delimited...^^`;";
s[3] = "What's New in Stat/Transfer^hs40.html^To see what's new in Stat/Transfer Version 13, check the following:  Formats  Other New Features...^New in Stat/Transfer^`;";
s[4] = "Formats^NewFormats.html^Stat/Transfer Version 13 has added support for the following formats:   EViews   Genstat   Stata...^Formats^`;";
s[5] = "Other New Features^OtherNewFeatures.html^New Options  Preserve numeric widths Control over SAS Date and Time formats Blank columns Can be...^Value label browser;International character sets;Long variable labels for Stata;Automatic program generation;Automatic transfer logging^`;";
s[6] = "Getting Started^GettingStarted.html^In order to use your copy of Stat/Transfer most effectively, please check the following sections:...^Getting Started^`;";
s[7] = "Trial Mode Software^TrialModeSoftware.html^If you have downloaded Stat/Transfer from our website, or otherwise obtained a trial version, it wil...^Trial Mode Software^`;";
s[8] = "Activation^hs95.html^After installation is complete, you must activate your software, using a code found on your CD envel...^Activation^`;";
s[9] = "Deactivation^Deactivation.html^About Deactivation  Your copy of Stat/Transfer allows you to install Stat/Transfer on three separate...^Deactivation^`;";
s[10] = "Network and Lease Licensing^NetworkAndLeaseLicensing.html^Licensing   A lease license allows a fixed number of users to use Stat/Transfer within a year.    If...^Network and Lease Licensing^`;";
s[11] = "Read-me File^Read-meFile.html^The installation or Web update procedure may copy a file called read.me, which will be a supplement...^Read-me File^`;";
s[12] = "Demo Files^hs10.html^The distribution disk contains sample files in many of the supported formats, which you may find use...^Demo files^`;";
s[13] = "Web Update^hs11.html^We periodically post maintenance releases of Stat/Transfer on our website to support new file format...^Web Update^`;";
s[14] = "Uninstalling^removingst.html^Uninstalling Stat/Transfer  On Windows select the Uninstall option from the Start menu’s Stat/Tran...^Uninstalling^`;";
s[15] = "Technical Support^hs145.html^Before you seek support, please check the online help  or look in the online manual and see if the s...^Technical Support^`;";
s[16] = "The Stat/Transfer User Interface^hs150.html^Version 13 of Stat/Transfer has a standard graphic interface and is extremely simple to use.  If you...^User Interface^`;";
s[17] = "Starting Stat/Transfer^hs160.html^On Windows, the installation procedure will install a folder for Stat/Transfer in the Programs menu...^Starting Stat/Transfer^`;";
s[18] = "Transfer Dialog Box^hs17.html^You can obtain help for any line in the Transfer dialog box by clicking on any of the topics below....^Transfer dialog box^`;";
s[19] = "Selecting the Input File Format^hs180.html^The input file format is selected in the first line of the Transfer dialog box, the Input File Type...^Input File Format^`;";
s[20] = "The File Specification Line^hs200.html^Input File The input data file is chosen using the second line of the Transfer dialog box, the File...^International Character Sets;Input File Name;Standard File Extensions^`;";
s[21] = "Selecting Worksheet Pages^hs230.html^Whenever you select a worksheet as input, Stat/Transfer will check to see if multiple pages are pres...^Worksheet pages, selecting^`;";
s[22] = "Selecting Tables for Access and ODBC Input^hs240.html^Whenever you select either an Access file or an ODBC data source as input, Stat/Transfer will displa...^Tables for Access and ODBC Input^`;";
s[23] = "Selecting Members of SAS CPORT and Transport Files^hs270.html^Whenever you select a SAS CPORT or Transport file as input, Stat/Transfer will display a Member sele...^Selecting Members of SAS CPORT and Transport Files^`;";
s[24] = "Most Recently Used File Lists^hs290.html^If you often use the same input file, you can use the `Most Recently Used` file list to select the f...^Most Recently Used File Lists^`;";
s[25] = "Data Viewer^hs300.html^Data Viewer You can preview your input data by pressing the View button in the Transfer dialog box....^Data Viewer;Long String Viewer;Variable Info Viewer^`;";
s[26] = "Variable Selection Indicator^hs310.html^When the input file has been specified, Stat/Transfer by default selects all of the variables for tr...^Variable Selection Indicator^`;";
s[27] = "Selecting the Output File Format^hs320.html^The output file format is selected in the third line of the dialog box, Output File Type.  It is alw...^Output File Format;Stata Output;SAS Output;ASCII Output^`;";
s[28] = "Selecting the Output File^hs340.html^The output file name is given on the fourth line of the Transfer dialog box. Since Stat/Transfer sup...^Selecting the Output File;Overwriting Output Files^`;";
s[29] = "Table Names for Access and ODBC Output^hs360.html^Whenever you select either an Access file or an ODBC data source as output, Stat/Transfer will displ...^Tables for Access and ODBC Output^`;";
s[30] = "Naming Members of SAS Transport Files^hs380.html^Whenever you select a SAS Transport file as output, Stat/Transfer will display a Member selection li...^Naming Members of SAS Transport Files^`;";
s[31] = "Resetting Stat/Transfer^ResettingStatTransfer.html^The Reset control at the bottom of the Transfer dialog box is used when you wish to do more than one...^Resetting Stat/Transfer^`;";
s[32] = "Running the Program^hs400.html^The Transfer Button When you have specified the input and output file types and names (with informat...^Running the Program^`;";
s[33] = "Generating a Stat/Transfer Program ^SaveProgram.html^You can tell stat transfer to automatically generate a program when you run a transfer.  To do this,...^Generating a Stat/Transfer Program ;Automatic program generation^`;";
s[34] = "Automatic Logging^AutomaticLogging.html^Stat/Transfer always writes a log that is displayed in the Log dialog box.  You can view it and, if...^Automatic Logging;Logging, Automatic^`;";
s[35] = "Variables Dialog Box^hs36.html^When the input file has been specified in the Transfer dialog box, by default Stat/Transfer selects...^Observations Dialog Box;Automatic Dropping of Constants^`;";
s[36] = "Variable Selection^hs420.html^Automatic Selection of All Variables in the Data Set When the input file has been specified in the T...^Selecting Variables with the Command Processor;Running the Program;Changing Output Variable Types;Available Options with the SET command^`;";
s[37] = "Value Labels Browser^ValueLabelBrowser.html^If your input file has value labels, the option Value Label Browser allows you to display them for e...^Value Labels Browser^`;";
s[38] = "Output Variable Types^hs445.html^Since different output formats use different variable types, Stat/Transfer will either automatically...^Input and Output Variable Types^`;";
s[39] = "Target Output Variable Types^hs450.html^Output Variable Types Systems differ widely in the number and variety of variable types they support...^Input and Output Variable Types;Automatic Dropping of Constants^`;";
s[40] = "Automatic Optimization of Target Types^hs470.html^Stat/Transfer attempts to produce the smallest possible output data set. After reading your data, St...^Automatic Optimization of Target Types;Automatic Dropping of Constants^`;";
s[41] = "Manually Changing the Types of Output Variables^hs510.html^In most cases it is appropriate let Stat/Transfer automatically optimize your variables and to accep...^^`;";
s[42] = "Automatic Dropping of Constants^hs500.html^You can tell Stat/Transfer to automatically drop variables that are constant or missing for a select...^^`;";
s[43] = "Use Doubles Option^UseDoubles.html^The Use Doubles option tells Stat/Transfer whether or not to put variables with fractional parts int...^Use Doubles Option^`;";
s[44] = "Observations Dialog Box^hs45.html^The Observations dialog box allows you to select particular cases from your input data.  The fields...^^`;";
s[45] = "Selecting Cases^hs530.html^To reach the dialog box that allows you to select specific cases or records from your data set, clic...^^`;";
s[46] = "Missing Values^hs580.html^You can test to see if the value of any variable is missing by comparing it to the special internal...^^`;";
s[47] = "Sampling Functions^hs590.html^Three functions are available for sampling.  Random Samples The first function           samp_rand(p...^Case Selection^`;";
s[48] = "Options Dialog Box^Options_Contents.html^Setting options for Stat/Transfer in the Options dialog box is discussed in the following topics.  G...^Options Dialog Box^`;";
s[49] = "General Options^hs50.html^Ask Permission before Overwriting Files The option Ask Permission Before Overwriting Files is on by...^^`;";
s[50] = "User Missing Values^hs51.html^User Missing Values You have some control over the way missing values are treated for input files co...^Command Processor Options for Specifying Pages and Tables;Map to extended missing;ASCII Files - Read Options;Date/Time Formats;OSIRIS Files;SPSS Data Files;SPSS Portable Files^`;";
s[51] = "Date/Time Formats - Reading^hs52.html^You can control how Stat/Transfer reads dates and time.  In most cases, users will not need to chang...^^`;";
s[52] = "Date/Time Formats - Writing^hs53.html^Stat/Transfer gives you considerable control over how dates and times written to output ASCII files....^Date/Time Formats - Writing^`;";
s[53] = "Encoding Options^hs54.html^Introduction to Character Encoding In the early days of computing, characters and numbers were repre...^Encoding Options;Character Encoding;Character Encoding Options^`;";
s[54] = "ODBC Options^hs55.html^The following options allow you to fine-tune your ODBC transfers.  They are generally for advanced u...^ODBC Options^`;";
s[55] = "ASCII/Text Files - Read Options^hs56.html^Delimiter This option will give you a list of possible delimiters for input ASCII files.  You can ch...^^`;";
s[56] = "ASCII/Text  Files - Write Options^hs57.html^ASCII/Text Files  Delimiter The Delimiter option will give you a list of possible delimiters for out...^^`;";
s[57] = "Reading SAS Value Labels^hs58.html^Stat/Transfer can read SAS user-defined formats (value labels) directly from a Windows SAS catalog f...^Reading SAS Value Labels^`;";
s[58] = "SAS Writing^hs59.html^Write a PROC FORMAT program  Stat/Transfer can optionally write a PROC FORMAT program that you can u...^SAS Writing^`;";
s[59] = "Worksheets^hs60.html^You have several options to specify what part of an input worksheet to read and how to read variable...^^`;";
s[60] = "JMP Options^hs61.html^Write value labels to JMP files If this option is checked Stat/Transfer will write value labels to t...^JMP Options^`;";
s[61] = "R and S-PLUS Options^hs62.html^Convert R and S-Plus factors  Both R and S-plus have a type known as a `factor`.  This consists of a...^R and S-PLUS Options^`;";
s[62] = "RATS Options^hs63.html^Writing  RATS options are not `sticky`.  They must be set before each file transfer.  Also, because...^RATS Options^`;";
s[63] = "Output Options (1) ^hs64.html^SAS Data Representation Stat/Transfer can write SAS files in formats that are appropriate for using...^Output Options (1) ^`;";
s[64] = "Output Options (2)^hs65.html^These options control how Stat/Transfer constructs the names in the output section of the Transfer d...^Output Options (2)^`;";
s[65] = "User Interface Options^hs66.html^Value Labels Browser If your input file has value labels, you can display them, for each variable, o...^User Interface Options^`;";
s[66] = "Default Directories^hs67.html^These options allow you to control which directories will appear by default in the input and output...^Default Directories^`;";
s[67] = "Data Viewer Options^hs68.html^Long String Viewer The long string viewer allows you to see strings that are too long to be viewed a...^Data Viewer Options^`;";
s[68] = "Stat/Transfer Program Generation^hs69.html^These options control the generation of command processor programs by the Stat/Transfer user interfa...^Stat/Transfer Program Generation^`;";
s[69] = "Automatic Transfer Logging^hs70.html^Stat/Transfer always writes a log that is displayed in the Log dialog box.  You can view it and, if...^^`;";
s[70] = "Advanced ODBC Options^hs71.html^User Name (UID) Password (PSW)   On Windows, you will not need to use these options at all, since th...^Advanced ODBC Options^`;";
s[71] = "Restoring and Saving Options^hs750.html^Restore Default The Restore Default button resets all of the options to their default values.  Resto...^Available Options with the SET command;ASCII Files - Read Options^`;";
s[72] = "Run Program Dialog Box^RunProgramDialogBox.html^The Run Program dialogue box allows you to run a Stat/Transfer command file directly from the user i...^^`;";
s[73] = "About the Run Program Dialog Box^AboutTheRunProgramDialogBox.html^You can now load, edit and run a Stat/Transfer command processor program directly from this tab in t...^About the Run Program Dialog Box^`;";
s[74] = "Log Dialog Box^LogDialogBox1.html^The Log dialogue box gives you information about what is happening during a transfer.   About the Lo...^^`;";
s[75] = "About the Log Dialog Box^AboutTheLogDialogBox.html^Click on the Log tab and you will see the Stat/Transfer Log dialog box.  This feature gives informat...^About the Log Dialog Box^`;";
s[76] = "The Command Processor^hs848.html^You can run Stat/Transfer without using the user interface, by using the Stat/Transfer command proce...^Command Files^`;";
s[77] = "Calling the Command Processor^hs850.html^Stat/Transfer has a command processor that will perform transfers using a copy-like syntax and which...^^`;";
s[78] = "Transfers from the Command Processor^hs860.html^The basic command used when running the Stat/Transfer command processor is COPY, which has  the foll...^The File Specification Line;Output File Specification;Selecting the Input Data File;Selecting the Output File^`;";
s[79] = "Transfers from the Operating System Prompt ^hs870.html^You can run a transfer directly from the operating system (OS) prompt or you can execute a command f...^Transfers from the Operating System Prompt ;Available Options with the SET command;Command Porcessor Options for Variables^`;";
s[80] = "Combining Files^hs872.html^If you wish to combine multiple input files into a single output file, use the COMBINE command inste...^^`;";
s[81] = "Specifying the File Type^hs875.html^In order to specify the input and output files when using the command processor, see:  File Format...^File Format Specification^`;";
s[82] = "File Format Specification ^hs880.html^Standard Extensions and File-Type Tags When a COPY command is given, Stat/Transfer tries to determin...^^`;";
s[83] = "Special Cases when Specifying Files^hs890.html^Specifying S-PLUS Files A period must always be added to standard S-PLUS file names, since these do...^1-2-3 Worksheet Files;Available Options with the SET command;Command Processor Options for Specifying Pages and Tables^`;";
s[84] = "Options Set by Parameters^hs895.html^Several options are set with parameters of the form '-xi'.  These are given after the COPY command a...^^`;";
s[85] = "Options for Pages and Tables^hs900.html^Several options are set with parameters of the form '-xi'.  These are given after the COPY command a...^^`;";
s[86] = "Options for Messages^hs940.html^Several options are set with parameters of the form '-xi'.  These are given after the COPY command a...^^`;";
s[87] = "Selecting Cases^hs950.html^Cases to be transferred can be selected when you are using the COPY command from the Stat/Transfer c...^Case Selection^`;";
s[88] = "Selecting Variables^hs960.html^Variables to be transferred can be selected when you are using the COPY command from the Stat/Transf...^Changing Output Variable Types^`;";
s[89] = "Changing Output Variable Types ^hs965.html^The TYPES Command If you wish to change the output variable target type manually, then instead of us...^^`;";
s[90] = "Setting Options with the SET Command^hs1000.html^When using the command processor, most of the options of the user interface system are available....^Available Options with the SET command^`;";
s[91] = "Startup Options File^hs1010.html^You can set options globally and automatically at startup by putting them in a file called profile....^Setting Options with the SET Command^`;";
s[92] = "Available Options ^hs1020.html^The following options are available for use with the SET command.  Case does not matter when they ar...^Available Options ^`;";
s[93] = "Other Available Command Processor Commands^hs1030.html^Several commands are available at the Stat/Transfer prompt which are the same as operating system co...^^`;";
s[94] = "Command Files^hs1040.html^You can enter Stat/Transfer commands in a command file, as well as interactively at the Stat/Transfe...^^`;";
s[95] = "ODBC Data Sources^hs1045.html^If you are using an ODBC data source with the command processor, see:  The DBR and DBW Commands  Run...^^`;";
s[96] = "The DBR and DBW Commands^hs1050.html^Generally, the process of opening an ODBC data source for reading or writing requires information be...^ODBC Data Source Questions^`;";
s[97] = "Running Batch Jobs with ODBC^hs1060.html^With SQL Server and other client-server databases, you are likely to need a password and other param...^^`;";
s[98] = "Variable Naming and Limits^hs1075.html^The sections below contain general information about Stat/Transfer's handling of variables and about...^^`;";
s[99] = "Variable Names^hs1080.html^Stat/Transfer will, by default, ensure that variable names are legal in the target data set and are...^^`;";
s[100] = "Limitations on the Number of Variables^hs1090.html^Stat/Transfer will check whether the number of variables that have been selected exceeds the maximum...^Internal Limitations^`;";
s[101] = "Limitations on Strings with Value Labels^hs1095.html^Both SAS and SPSS support the labeling of string variables.  Stat/Transfer will now automatically tr...^^`;";
s[102] = "Internal Limitations^hs1100.html^The maximum width of an alphanumeric variable is 32,000 characters.  Variable names are limited inte...^^`;";
s[103] = "Return Transfers to the Original Format^hs1110.html^Because systems vary widely in the types of variables they support and the information they store ab...^^`;";
s[104] = "Supported Programs^hs1120.html^See the Read-me File for any changes to Stat/Transfer.  See Input and Output Variable Types for a su...^File Format Specification;Supported File Types^`;";
s[105] = "Input and Output Variable Types^hs1130.html^For a given input file format, Stat/Transfer will select a target output variable type for each inpu...^^`;";
s[106] = "1-2-3 Worksheet Files^hs106.html^Stat/Transfer will read and write files from any version of Lotus 1-2-3 (including Release 3.x and W...^1-2-3 Worksheet Files^`;";
s[107] = "Access^hs107.html^Stat/Transfer will read and write Access databases on Windows.  Although the data are transferred th...^^`;";
s[108] = "ASCII Files - Delimited^hs108.html^Stat/Transfer will read and write delimited ASCII.  Note that as of version 10, `ASCII` is used as a...^^`;";
s[109] = "ASCII Files - Fixed Format^hs109.html^Stat/Transfer will read and write fixed format ASCII.  Standard extension:  txt. csv  Reading Fixed...^^`;";
s[110] = "SCHEMA Files for ASCII Input^hs110.html^The Schema file is used to describe an input ASCII file to Stat/Transfer.  If you are using a fixed...^SCHEMA Files for ASCII Input;ASCII Files - Fixed Format^`;";
s[111] = "dBASE Files and Compatibles^hs111.html^Stat/Transfer will read and write dBASE III+ and IV files, and those from compatible systems such as...^^`;";
s[112] = "DDI (Data Documentation Initiative) Schemas^hs112.html^The Data Documentation Initiative (DDI) is an open, international effort to provide a standard way o...^DDI (Data Documentation Initiative) Schemas^`;";
s[113] = "Epi Info^hs113.html^Stat/Transfer will read and write files for Epi Info, a free statistical program developed by the Ce...^^`;";
s[114] = "EViews^hs157.html^EViews is a popular package for econometric analysis, forecasting and simulation.   Series and Serie...^EViews^`;";
s[115] = "Excel Worksheets^hs114.html^Stat/Transfer will read and write files from Excel.  It will read all versions and will write Versio...^^`;";
s[116] = "FoxPro Files^hs115.html^Stat/Transfer will read and write FoxPro files.  Standard extension:  dbf  Reading FoxPro Files FoxP...^^`;";
s[117] = "Gauss Files^hs116.html^Stat/Transfer will read and write Gauss data sets.  There are two Gauss formats.    Gauss 89  was u...^^`;";
s[118] = "GenStat Files^hs159.html^Genstat is a comprehensive statistical and data management package originally conceived and develope...^GenStat Files^`;";
s[119] = "gretl^hs117.html^gretl  (Gnu Regression, Econometrics and Time-series Library) is a free, open-source package for eco...^gretl^`;";
s[120] = "HTML Tables^hs118.html^Stat/Transfer will write HTML tables for use in web pages.  Standard extension:  htm  Writing HTML T...^^`;";
s[121] = "JMP Files^hs119.html^JMP is a general statistics package from the SAS Institute that runs on both the Windows and Macinto...^^`;";
s[122] = "LIMDEP Files^hs120.html^Stat/Transfer supports all versions of LIMDEP .  LIMDEP is an econometric software program for the a...^^`;";
s[123] = "Matlab Files^hs121.html^Matlab matrices through Version 5 are supported on the following platforms:       Macintosh       Wi...^^`;";
s[124] = "Mineset Files^hs122.html^Mineset is a data visualization package from Silicon Graphics, Inc.  The published and portable data...^^`;";
s[125] = "Minitab Worksheets^hs123.html^Minitab is a general statistics package from Minitab, Inc.  Stat/Transfer will read Minitab workshee...^^`;";
s[126] = "Mplus Files^hs124.html^Stat/Transfer supports exporting to Mplus Version 6-7 for Windows.  Mplus is a latent variable model...^Mplus Files^`;";
s[127] = "NLOGIT Files^hs125.html^Stat/Transfer supports all versions of NLOGIT  for Windows.  NLOGIT is an econometric software progr...^^`;";
s[128] = "ODBC Data Sources^hs126.html^Stat/Transfer can read or write data for any file type for which you have, or can obtain, an ODBC dr...^^`;";
s[129] = "OpenDocument Spreadsheets^hs127.html^The OpenDocument format for spreadsheets is an ISO standard XML format for spreadsheet data.  It sup...^OpenDocument Spreadsheets^`;";
s[130] = "OSIRIS Files^hs128.html^OSIRIS is a general purpose statistical package written for use on IBM mainframes.   It is no longer...^^`;";
s[131] = "Paradox Tables^hs129.html^Because Paradox stores numbers in binary rather than character representation and because it explici...^^`;";
s[132] = "Quattro Pro Worksheets^hs130.html^Stat/Transfer will read and write Quattro Pro files.  Standard extensions:  wq?, wb?  Reading Quattr...^^`;";
s[133] = "R^hs131.html^R is a free, open-source environment for statistical computing and graphics.  Stat/Transfer will rea...^^`;";
s[134] = "RATS Files^hs132.html^RATS (Regression Analysis of Time Series) is a general-purpose econometric and time series analysis...^RATS Files^`;";
s[135] = "SAS Data Files^hs133.html^Stat/Transfer will read and write SAS Version 6 - 9 data files for the Windows,  OS/2 and Unix platf...^SAS Data File Questions^`;";
s[136] = "SAS Value Labels^hs134.html^Stat/Transfer supports the import and export of SAS value labels.    Reading SAS Value Labels SAS, u...^^`;";
s[137] = "SAS CPORT^hs135.html^The SAS CPORT is primarily used for transporting data libraries between machines.  Stat/Transfer wil...^^`;";
s[138] = "SAS Transport Files^hs136.html^Stat/Transfer will read and write data sets in the SAS Transport Format.  This is, according to the...^^`;";
s[139] = "S-PLUS Files^hs137.html^Stat/Transfer will read and write S-PLUS data sets.  Files written on 64 bit machines such as the DE...^Special Cases when Specifying Files^`;";
s[140] = "SPSS Data Files^hs138.html^Stat/Transfer will read and write SPSS data files from the following platforms:         Macintosh...^^`;";
s[141] = "SPSS Portable Files^hs139.html^SPSS Portable files (previously called Export files) were designed to transfer SPSS data sets betwee...^^`;";
s[142] = "Stata Files^hs140.html^Stat/Transfer will read and write data for any version of Stata including versions running on Unix a...^Stata File Questions^`;";
s[143] = "Statistica Files^hs141.html^Stat/Transfer supports Statistica Versions 5 and 7 - 9.    Standard extension:   sta  Reading Statis...^^`;";
s[144] = "SYSTAT Files^hs142.html^Stat/Transfer writes double precision SYSTAT files.  It will read either double or single precision...^^`;";
s[145] = "Triple-S^hs143.html^Triple-S, is an open standard for the transfer of survey data and its meta-data between software pac...^Triple-S^`;";
s[146] = "Frequently Asked Questions^hs1410.html^Frequently Asked Questions    Check the following sections for answers to your questions:  General...^^`;";
s[147] = "Character Encoding^CharacterEncoding.html^Q. What are Encoding Errors?  A.  Stat/Transfer stores strings internally in Unicode, which is capa...^Character Encoding^`;";
s[148] = "General Questions^hs1420.html^Q.  How big a data set can Stat/Transfer handle?  A.  There is no limit on the number of cases that...^^`;";
s[149] = "Command Processor^hs1422.html^Q.  When I go to the Start menu in Windows and click on Stat/Transfer, I see something called Stat/T...^^`;";
s[150] = "Licensing^hs1427.html^Q.  Can I install Stat/Transfer on a network server?  A.  Our Single User or Workgroup licenses do n...^Licensing^`;";
s[151] = "Linux^Linux.html^Q.  Should I install Stat/Transfer with root privileges?  A. If you have a multi-user license and yo...^Linux - FAQ^`;";
s[152] = "ODBC Data Sources^hs1430.html^Q.  Why can't I find my database in the list of ODBC sources?  A.  In order for a data source to app...^64 bit Windows - FAQ^`;";
s[153] = "SAS Data Files^hs1440.html^Q.  Will the feature that reads SAS value labels work with Unix SAS files?  A.  Stat/Transfer only r...^^`;";
s[154] = "SAS Transport Files^hs1450.html^Q.  Stat/Transfer reports a `dictionary error` or otherwise refuses to read my SAS file.  What is th...^^`;";
s[155] = "S-PLUS Files^hs1460.html^Q.  Stat/Transfer will not read my S-PLUS file.  What is wrong?  A.  Remember, some S-PLUS file have...^^`;";
s[156] = "Stata Files^hs1470.html^Q.  Why do all of my labels and variable names come out in lower case when I transfer a file to Stat...^^`;";
s[157] = "Worksheet Files^hs1480.html^Q.  I have some blank rows in my worksheet.  Stat/Transfer stops reading the data as soon as it enco...^Command Processor;1-2-3 Worksheet Files^`;";

var stCookies = document.cookie;
var p = stCookies.indexOf("d=");
if (p != -1)
{
  var st = p + 2;
  var en = stCookies.indexOf(";", st);
  if (en == -1)
    {en = stCookies.length;}
  var d = stCookies.substring(st, en);
  d = unescape(d);
}

var iUsingDoubleQuotes = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"')
  {iUsingDoubleQuotes = 1;}

var arFound = new Array();
var iFound = 0;
var iRankNumber = 0;
if (iUsingDoubleQuotes == 0)
{
  var arMinus = new Array();
  var arIncludedTerms = new Array();
  var w = d.split(" ");
  for (var a = 0; a < w.length; a++)
  {
    arMinus[a] = 0;
    if (w[a].charAt(0) == '-')
      {arMinus[a] = 1;}
    else
      {arIncludedTerms.push(w[a]);}
  }

  for (var a = 0; a < w.length; a++)
    {w[a] = w[a].replace(/^\-|^\+/gi, "");}

  a = 0;
  for (var c = 0; c < s.length; c++)
  {
    pa = 0;
    nh = 0;
    for (var i = 0; i < arMinus.length; i++)
    {
      if (arMinus[i] == 0)
      {
        nh++;
        var pat = new RegExp(w[i], "i");
        var rn = s[c].search(pat);
        if (rn >= 0)
          {pa++;}
        else
          {pa = 0;}
      }

      if (arMinus[i] == 1)
      {
        var pat = new RegExp(w[i], "i");
        var rn = s[c].search(pat);
        if (rn >= 0)
          {pa = 0;}
      }
    }

    if (pa == nh)
    {
      var es = s[c].split('^');
      var iRank = 100;
      var iTermsFound = 0;
      var iTitlePercentage = 15;
      var iKeywordsPercentage = 25;
      var iHelpTextPercentage = 60;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        var iPT = es[0].search(patTerm);
        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iTitlePercentage = Math.round(iTitlePercentage * (iTermsFound/arIncludedTerms.length));}
      if (iTitlePercentage < 0)
        {iTitlePercentage = 0;}
      iTermsFound = 0;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        var iPT = es[3].search(patTerm);
        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iKeywordsPercentage = Math.round(iKeywordsPercentage * (iTermsFound/arIncludedTerms.length));}
      if (iKeywordsPercentage <= 0)
        {iKeywordsPercentage = 1;}
      iTermsFound = 0;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        if (boFTS == 0)
          {var iPT = es[2].search(patTerm);}
        else
          {var iPT = es[4].search(patTerm);}

        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iHelpTextPercentage = Math.round(iHelpTextPercentage * (iTermsFound/arIncludedTerms.length));}
      if (iHelpTextPercentage < 0)
        {iHelpTextPercentage = 0;}
      iRank = iTitlePercentage + iKeywordsPercentage + iHelpTextPercentage;
      arFound[a] = iRank + '^' + s[c];
      a++;
    }
  }
  iFound = a;
  arFound.sort(compareNum);
  arFound.reverse();
}

if (iUsingDoubleQuotes == 1)
{
  d = d.replace(/"/gi, "");
  var arMinus = new Array();
  var arIncludedTerms = new Array();
  var w = d.split(" ");
  for (var a = 0; a < w.length; a++)
  {
    arMinus[a] = 0;
    if (w[a].charAt(0) == '-')
      {arMinus[a] = 1;}
    else
      {arIncludedTerms.push(w[a]);}
  }
  var a = 0;
  var pat = new RegExp(d, "i");
  for (var c = 0; c < s.length; c++)
  {
    var rn = s[c].search(pat);
    if (rn >= 0)
    {
      var es = s[c].split('^');
      var iRank = 100;
      var iTermsFound = 0;
      var iTitlePercentage = 15;
      var iKeywordsPercentage = 25;
      var iHelpTextPercentage = 60;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        var iPT = es[0].search(patTerm);
        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iTitlePercentage = Math.round(iTitlePercentage * (iTermsFound/arIncludedTerms.length));}
      if (iTitlePercentage < 0)
        {iTitlePercentage = 0;}
      iTermsFound = 0;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        var iPT = es[3].search(patTerm);
        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iKeywordsPercentage = Math.round(iKeywordsPercentage * (iTermsFound/arIncludedTerms.length));}
      if (iKeywordsPercentage <= 0)
        {iKeywordsPercentage = 1;}
      iTermsFound = 0;
      for (var ii = 0; ii < arIncludedTerms.length; ii++)
      {
        var patTerm = new RegExp(arIncludedTerms[ii], "i");
        if (boFTS == 0)
          {var iPT = es[2].search(patTerm);}
        else
          {var iPT = es[4].search(patTerm);}
        if (iPT >= 0)
          {iTermsFound++;}
      }
      if (iTermsFound < arIncludedTerms.length)
        {iHelpTextPercentage = Math.round(iHelpTextPercentage * (iTermsFound/arIncludedTerms.length));}
      if (iHelpTextPercentage < 0)
        {iHelpTextPercentage = 0;}
      iRank = iTitlePercentage + iKeywordsPercentage + iHelpTextPercentage;
      arFound[a] = iRank + '^' + s[c];
      a++;
    }
  }
  iFound = a;
  arFound.sort(compareNum);
  arFound.reverse();
}

function return_query()
{
  document.jse_Form.d.value = d;
}

function compareNum(a,b)
{
  var arA = a.split("^");
  var arB = b.split("^");
  return arA[0]-arB[0]
}

function num_jse()
{
  document.write(iFound);
}

function out_jse()
{
  if (iFound == 0)
  {
    document.write('Your search did not match any documents.<br>Please ensure that all keywords are spelled correctly.<br>Or try different or more general keywords. Thank you.');
    return;
  }
  for (var a = 0; a < arFound.length; a++)
  {
    var os = arFound[a].split("^");
    if (bold == 1 && iUsingDoubleQuotes == 1)
    {
      var br = "<b>" + d + "</b>";
      os[3] = os[3].replace(pat, br);
    }
    var stRank = '';
    if (include_num == 1)
      {document.write(a + 1, '. <a href="', os[2]+"?key="+document.jse_Form.d.value+"", '" onclick="setUrlByHref(this)">', os[1], '</a>', '<br>', os[3], '<p>');}
    else
      {document.write('<a href="', os[2]+"?key="+document.jse_Form.d.value+"", '" onclick="setUrlByHref(this)">', os[1], '</a>', '<br>', os[3], '<p>');}
  }
}