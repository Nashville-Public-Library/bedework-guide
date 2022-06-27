---
sidebar_position: 7
---

# Pixie Dust

Pixie Dust output lives here: [https://events.library.nashville.org/3.10/pixieDust](https://events.library.nashville.org/3.10/pixieDust)

If you click on any of the files, it'll probably dump the results right in your browser window. Then you can do a save-as or a copy/paste to capture the contents.

How it works:
-	On the server, there is a family of scripts that cooperate to produce the results in /home/bedework/scripts/pixieDust. There's a Read.me text file in there which explains how everything works.
-	The whole process is driven by runall.sh in that directory. In takes two arguments -- start date and end date. It then loops through all the branches and dumps the results in the folder that corresponds to the above url.
-	Results are dumped into categories (below):
  - `==Could not place. Missing Date and Time information==` (lists events that could not be placed in one of the extract categories - something needs to be fixed in Bedework)
  - `==Every Day==` (must have “Every Day” in recurrence pattern field)
  - `==Monday== `(“Monday” or “Mondays” must appear in the recurrence pattern field)
  - `==Tuesday==` (“Tuesday” or “Tuesdays” must appear in the recurrence pattern field)
  - `==Wednesday==` ( “Wednesday” or “Wednesdays” must appear in the recurrence pattern field)
  - `==Thursday==` (“Thursday” or “Thursdays” must appear in the recurrence pattern field)
  - `==Friday==` (“Friday” or “Fridays” must appear in the recurrence pattern field)
  - `==Saturday==` (“Saturday” or “Saturdays” must appear in the recurrence pattern field)
  - `==Sunday==` (“Sunday” or “Sundays” must appear in the recurrence pattern field)
  - `==Others==` (lists non-recurring events in date order)

## Update Pixie Dust to new Quarter

### Get to the right place as the right user
1. `ssh` into events ##.##.##.## steven ##.##.##.##
1. Assume "bedework" identity: `sudo su - bedework`
1. Enter your password when prompted.

### Update scheduled job
1. Dump the current crontab into a backup file (and into a file you'll edit): `crontab -l > ~/crontab-yyyy.mm.dd`
1. Edit that file any way you can. If you don't know a UNIX editor, you can pull it back to your Workstation and edit there, then push the updated file back to the server.  Edit the last line, changing the two yyyymmdd dates to the new range.  Be sure to keep the closing paran at the end of the line.
1. Install the crontab: `crontab < crontab-yyyy.mm.dd` accidentally mangled the file while editing, the system may complain that the file is invalid and refuse to install it.
1. Test update: `crontab -l.`  You should see your updates in the terminal window.

Current PixieDust is updated automatically at 00:00, 08:00, 11:00, 14:00, 17:00

### Update data collection area

Clear out old archive:
1. `cd ~/wwwDocRoot/pixieDust/LastQuarter`
1. `rm *`

Move everything in PixieDust into archive:
1. `cd ..`
1. `mv *-* LastQuarter`
1. `ls`  -- to check contents of PixieDust. Should now be empty except for LastQuarter subdirectory.
1. `ls LastQuarter`  -- to check contents of LastQuarter. Should have all the files that were up in PixieDust directory.
