import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChevronRight, Person } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

const users = [
  {
    id: "1",
    firstName: "Rhys",
    gender: "M",
    lastName: "Arriaga",
    role: "Admin",
  },
  {
    id: "2",
    firstName: "Laura",
    gender: "F",
    lastName: "Core",
    role: "Member",
  },
  {
    id: "3",
    firstName: "Joshua",
    gender: "M",
    lastName: "Jagger",
    role: "Member",
  },
];

const UsersWidget = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader title={t("dashboard.users.title")} />
      <CardContent>
        <List>
          {users.map((user) => (
            <ListItem disableGutters key={user.id}>
              <ListItemAvatar>
                <Avatar>
                  <Person />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.lastName} ${user.firstName}`}
                primaryTypographyProps={{
                  fontWeight: theme.typography.fontWeightMedium,
                }}
                secondary={user.role}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Go to user details"
                  component={RouterLink}
                  edge="end"
                  to={`/${process.env.PUBLIC_URL}/admin/user-management`}
                >
                  <ChevronRight />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UsersWidget;
